from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings
from .models import JobCard
from django.utils.dateparse import parse_date
import logging

logger = logging.getLogger(__name__)

@shared_task
def send_job_card_report_email(job_card_id):
    """
    Send an email with the details of a job card to the user who reported it.

    :param job_card_id: The ID of the job card to be included in the email.
    """
    try:
        job_card = JobCard.objects.get(id=job_card_id)
        user_email = job_card.reported_by  # Ensure this is the correct field for the user's email
        subject = f"Job Card Report - {job_card.job_number}"
        message = f"""
        Job Number: {job_card.job_number}
        Equipment Name: {job_card.equipment_name}
        Reporting Date: {job_card.reporting_date}
        Fault Reported: {job_card.fault_reported}
        Diagnosis: {job_card.diagnosis}
        Action Done: {job_card.action_done}
        Required Spare Parts: {job_card.required_spare_parts}
        """
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [user_email],
            fail_silently=False,
        )
        logger.info(f"Job card report email sent successfully to {user_email}.")
    except JobCard.DoesNotExist:
        logger.error(f"JobCard with ID {job_card_id} does not exist.")
    except Exception as e:
        logger.error(f"Error sending job card report email: {e}")

@shared_task
def generate_job_card_summary_report(start_date_str, end_date_str):
    """
    Generate and email a summary report of job cards within a specified date range.

    :param start_date_str: The start date of the report period (ISO format string).
    :param end_date_str: The end date of the report period (ISO format string).
    """
    try:
        start_date = parse_date(start_date_str)
        end_date = parse_date(end_date_str)

        if not start_date or not end_date:
            raise ValueError("Invalid date format provided.")

        report_data = JobCard.generate_summary_report(start_date, end_date)
        
        # Convert report_data to a string format suitable for email
        report_summary = "\n".join(
            [f"Status: {entry['status']}, Count: {entry['count']}" for entry in report_data]
        )
        
        subject = "Job Card Summary Report"
        message = f"Summary report from {start_date} to {end_date}:\n\n{report_summary}"
        
        # Assuming you want to send this summary to a fixed email address or multiple addresses
        recipient_list = ['recipient@example.com']  # Replace with actual recipient(s)
        
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            recipient_list,
            fail_silently=False,
        )
        logger.info("Job card summary report email sent successfully.")
    except ValueError as ve:
        logger.error(f"ValueError: {ve}")
    except Exception as e:
        logger.error(f"Error generating job card summary report: {e}")
