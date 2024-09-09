from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import UserManager
from datetime import datetime

# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True, verbose_name=_("Email Address"))
    first_name = models.CharField(max_length=100, verbose_name=_("First Name"))
    last_name = models.CharField(max_length=100, verbose_name=_("Last Name"))
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False) 
    last_login = models.DateTimeField(null=True, blank=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    
    objects = UserManager()
    
    def __str__(self):
        return self.email
    
    @property
    def get_full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"
    
    def tokens(self):
        # Placeholder method for token generation
        pass


class OneTimePassword(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name} - {self.otp} passcode'
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = "One Time Password"
        verbose_name_plural = "One Time Passwords"
    
    def is_expired(self):
        # OTPs expire after 24 hours
        expiration_time = self.created_at + timedelta(hours=24)
        return timezone.now() > expiration_time
