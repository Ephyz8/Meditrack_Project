from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import UserManager 

# Create your models here.

class User(AbstractUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True, verbose_name=_("Email Address"))
    first_name = models.CharField(max_length=100, verbose_name=_("First Name"))
    last_name = models.CharField(max_length=100, verbose_name=_("Last Name"))
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False) 
    last_login = models.DateTimeField(null=True, blank=True)
    
    USERNAME_FIELD='email'
    
    REQUIRED_FIELDS=['first_name', 'last_name']
    
    objects=UserManager()
    
    def __str__(self):
        return self.email
    
    @property
    def get_full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"
    
    
    def tokens(self):
        pass