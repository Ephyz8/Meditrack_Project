from django.utils import timezone
from datetime import timedelta
import random
import string
from .models import User, OneTimePassword 
from django.core.mail import EmailMessage
from django.conf import settings
from celery import shared_task  # For Celery task

def generate_otp():
    """
    Generate a 6-digit OTP and set an expiration time of 24 hours.
    """
    otp_code = ''.join(random.choices(string.digits, k=6))  # Generates a 6-digit random OTP
    expires_at = timezone.now() + timedelta(hours=24)  # OTP expires after 24 hours
    return otp_code, expires_at

@shared_task
def send_otp_email(email, otp_code):
    """
    Send OTP to the user's email address asynchronously using Celery.
    """
    try:
        # Fetch the user associated with the provided email
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return "User with this email does not exist."
    
    current_site = 'MediTrack.com'  # Your site name
    email_body = (
        f'Hi {user.first_name}, thanks for signing up on {current_site}. '
        f'Please verify your email with the one-time passcode: {otp_code}.'
    )
    
    # Store the OTP for the user in the database
    OneTimePassword.objects.create(user=user, otp=otp_code)
    
    # Prepare and send the email
    subject = 'Your OTP Code'
    from_email = settings.DEFAULT_FROM_EMAIL  # This should be set in your settings.py
    email_message = EmailMessage(subject=subject, body=email_body, from_email=from_email, to=[email])
    
    try:
        # Send email and raise error if it fails
        email_message.send(fail_silently=False)
    except Exception as e:
        # Log the error if email sending fails
        import logging
        logger = logging.getLogger(__name__)
        logger.error(f"Failed to send email to {email}: {e}")
        return f"Failed to send email: {e}"
    
    return "OTP email sent successfully."

def send_normal_email(data):
    """
    Send a normal email to the user.
    """
    email=EmailMessage(
       subject=data['email_subject'], 
       body=data['email_body'], 
       from_email=settings.EMAIL_HOST_USER, 
       to=[data['to_email']]
       )
    email.send()