from django.contrib.auth.models import BaseUserManager
from django.utils.translation import ugettext_lazy as _
from django.core.exceptions import ValidationError
from django.core.validators import validate_email

class UserManager(BaseUserManager):
    
    def email_validator(self, email):
        try:
            validate_email(email)
        except ValidationError as e:
            raise ValueError(_("Email is invalid"))
    
    def create_user(self, email, first_name, last_name, password=None, **extra_fields):
        if not email:
            raise ValueError(_("Email is required"))
        if not first_name:
            raise ValueError(_("First Name is required"))
        if not last_name:
            raise ValueError(_("Last Name is required"))
        
        email = self.normalize_email(email)
        self.email_validator(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, first_name, last_name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_verified', True)
        
        if extra_fields.get('is_staff') is not True:
            raise ValueError(_("Superuser must have is_staff=True"))
        
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_("Superuser must have is_superuser=True"))
        
        if extra_fields.get('is_verified') is not True:
            raise ValueError(_("Superuser must have is_verified=True"))
        
         user = self.create_user(
             email, first_name, last_name, password, **extra_fields
        )
        user.save(using=self._db)
        return user
