from django.utils import timezone
from datetime import timedelta
import random
import string
from .models import User, OneTimePassword 
from django.core.mail import EmailMessage
from django.conf import settings
from celery import shared_task  # For Celery task

def generate_otp():
    """Generate a 6-digit OTP and set an expiration time of 24 hours."""
    otp_code = ''.join(random.choices(string.digits, k=6))
    expires_at = timezone.now() + timedelta(hours=24)
    return otp_code, expires_at

@shared_task
def send_otp_email(email, otp_code):
    """Send OTP to the user's email address."""
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return "User with this email does not exist."
    
    current_site = 'MediTrack.com'  
    email_body = (
        f'Hi {user.first_name}, thanks for signing up on {current_site}. '
        f'Please verify your email with the one-time passcode: {otp_code}.'
    )
    
    # Create an instance of the OneTimePassword model
    OneTimePassword.objects.create(user=user, code=otp_code)
    
    # Send the email
    subject = 'Your OTP Code'
    from_email = settings.DEFAULT_FROM_EMAIL
    email_message = EmailMessage(subject=subject, body=email_body, from_email=from_email, to=[email])
    
    try:
        email_message.send(fail_silently=False)  # Set to False to raise an error on failure
    except Exception as e:
        return f"Failed to send email: {e}"
    
    return "OTP email sent successfully."
