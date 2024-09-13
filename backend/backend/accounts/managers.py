from django.contrib.auth.models import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):
    """
    Custom manager for the User model. It defines methods to create both regular users and superusers.
    """
    
    def email_validator(self, email):
        """
        Validate that the email provided follows the correct email format.
        """
        try:
            validate_email(email)  # Uses Django's built-in email validation
        except ValidationError as e:
            raise ValueError(_("Email is invalid"))  # Raise an error if validation fails
    
    def create_user(self, email, first_name, last_name, password=None, **extra_fields):
        """
        Create and return a regular user with the provided email, first name, last name, and password.
        """
        # Check that required fields are provided
        if not email:
            raise ValueError(_("Email is required"))
        if not first_name:
            raise ValueError(_("First Name is required"))
        if not last_name:
            raise ValueError(_("Last Name is required"))
        
        email = self.normalize_email(email)  # Normalize email to a standard format
        self.email_validator(email)  # Validate the email format
        
        # Create a new user instance
        user = self.model(email=email, first_name=first_name, last_name=last_name, **extra_fields)
        user.set_password(password)  # Hash the password before saving
        user.save(using=self._db)  # Save the user to the database
        return user
    
    def create_superuser(self, email, first_name, last_name, password=None, **extra_fields):
        """
        Create and return a superuser with the provided email, first name, last name, and password.
        """
        # Set additional fields to indicate the user is a staff member and superuser
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_verified', True)
        
        # Ensure that the extra fields have the correct values for a superuser
        if extra_fields.get('is_staff') is not True:
            raise ValueError(_("Superuser must have is_staff=True"))
        
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_("Superuser must have is_superuser=True"))
        
        if extra_fields.get('is_verified') is not True:
            raise ValueError(_("Superuser must have is_verified=True"))
        
        # Call the create_user method to create the superuser
        user = self.create_user(
             email, first_name, last_name, password, **extra_fields
        )
        user.save(using=self._db)  # Save the superuser to the database
        return user
