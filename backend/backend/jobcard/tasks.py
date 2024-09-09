from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings
from .models import JobCard
from django.utils.dateparse import parse_date
import logging

logger = logging.getLogger(__name__)

@shared_task
def send_job_card_report_email(subject, message, recipient_list):
    """
    Send an email with the provided subject and message to the recipient list.
    """
    try:
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            recipient_list,
            fail_silently=False,
        )
        logger.info(f"Email sent successfully to {recipient_list}.")
    except Exception as e:
        logger.error(f"Error sending email: {e}")


@shared_task
def generate_job_card_summary_report(start_date_str, end_date_str, recipient_list=None):
    """
    Generate and email a summary report of job cards within a specified date range.

    :param start_date_str: The start date of the report period (ISO format string).
    :param end_date_str: The end date of the report period (ISO format string).
    :param recipient_list: List of email addresses to send the report to.
    """
    try:
        start_date = parse_date(start_date_str)
        end_date = parse_date(end_date_str)

        if not start_date or not end_date:
            raise ValueError("Invalid date format provided.")

        # Fetch the summary report data
        report_data = JobCard.generate_summary_report(start_date, end_date)

        # Convert report data to a string format suitable for email
        report_summary = "\n".join(
            [f"Status: {entry['status']}, Count: {entry['count']}" for entry in report_data]
        )

        # Email content
        subject = "Job Card Summary Report"
        message = f"Summary report from {start_date} to {end_date}:\n\n{report_summary}"

        # Determine recipients
        if recipient_list is None:
            recipient_list = [settings.DEFAULT_FROM_EMAIL]  # Default recipient for testing

        # Send the email directly
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, recipient_list, fail_silently=False)
        
        logger.info(f"Job card summary report sent to {recipient_list}.")
    except ValueError as ve:
        logger.error(f"ValueError: {ve}")
    except Exception as e:
        logger.error(f"Error generating job card summary report: {e}")
