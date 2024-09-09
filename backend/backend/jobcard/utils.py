from datetime import datetime
from django.core.mail import send_mail
from django.conf import settings
from django.db.models import Max
from .models import JobCard

def parse_date(date_str):
    """
    Parse a date string into a datetime.date object.

    :param date_str: The date string in ISO format (YYYY-MM-DD).
    :return: A datetime.date object or None if parsing fails.
    """
    try:
        return datetime.strptime(date_str, '%Y-%m-%d').date()
    except ValueError:
        return None

def format_job_card_details(job_card):
    """
    Format details of a job card for display or email.

    :param job_card: An instance of JobCard.
    :return: A formatted string representation of the job card details.
    """
    return (
        f"Job Number: {job_card.job_number}\n"
        f"Request Number: {job_card.request_number}\n"
        f"Reporting Date: {job_card.reporting_date}\n"
        f"Department: {job_card.department}\n"
        f"Ward: {job_card.ward}\n"
        f"Reported By: {job_card.reported_by}\n"
        f"Equipment Name: {job_card.equipment_name}\n"
        f"Model: {job_card.model}\n"
        f"Brand: {job_card.brand}\n"
        f"Serial Number: {job_card.serial_number}\n"
        f"Fault Reported: {job_card.fault_reported}\n"
        f"Diagnosis: {job_card.diagnosis}\n"
        f"Action Done: {job_card.action_done}\n"
        f"Required Spare Parts: {job_card.required_spare_parts}\n"
    )

def get_next_request_number():
    """
    Get the next request number for a new job card.

    :return: The next request number as an integer.
    """
    last_request = JobCard.objects.aggregate(Max('request_number'))
    return (last_request['request_number__max'] or 0) + 1

def send_email(subject, message, recipient_list):
    """
    Send an email with the given subject, message, and recipients.

    :param subject: The subject of the email.
    :param message: The body of the email.
    :param recipient_list: List of email addresses to send the email to.
    """
    send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        recipient_list,
        fail_silently=False,
    )
