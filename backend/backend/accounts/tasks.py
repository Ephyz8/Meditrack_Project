from celery import shared_task
from .utils import send_otp_email, generate_otp

@shared_task
def send_otp_email_task(email):
    otp_code, expires_at = generate_otp()
    send_otp_email(email, otp_code)
