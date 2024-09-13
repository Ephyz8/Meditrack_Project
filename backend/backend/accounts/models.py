from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import UserManager
from datetime import timedelta
from django.utils import timezone
from rest_framework_simplejwt.tokens import RefreshToken

# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True, verbose_name=_("Email Address"))
    first_name = models.CharField(max_length=100, verbose_name=_("First Name"))
    last_name = models.CharField(max_length=100, verbose_name=_("Last Name"))
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)  # For email verification
    last_login = models.DateTimeField(null=True, blank=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    
    objects = UserManager()  # Custom user manager to handle email-based user creation
    
    def __str__(self):
        return self.email
    
    @property
    def get_full_name(self) -> str:
        """Returns the full name of the user."""
        return f"{self.first_name} {self.last_name}"
    
    def tokens(self):
        """Generates and returns JWT refresh and access tokens for the user."""
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }


class OneTimePassword(models.Model):
    """Model for storing one-time passwords (OTPs) sent to users."""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6, unique=True)  # 6-character OTP
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp when the OTP was created
    
    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name} - {self.otp} passcode'
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = "One Time Password"
        verbose_name_plural = "One Time Passwords"
    
    def is_expired(self):
        """Checks if the OTP has expired (24 hours validity)."""
        expiration_time = self.created_at + timedelta(hours=24)
        return timezone.now() > expiration_time
