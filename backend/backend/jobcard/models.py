from django.db import models
from django.db.models import Max
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.conf import settings

class JobCard(models.Model):
    """
    Model representing a job card with details about tasks, equipment, and status.
    """
    # Automatically incrementing job number
    job_number = models.PositiveIntegerField(primary_key=True, verbose_name="Job Number")
    # Request number starts from 1 and increments automatically
    request_number = models.PositiveIntegerField(unique=True, verbose_name="Request Number")
    reporting_date = models.DateField(verbose_name="Reporting Date")
    department = models.CharField(max_length=100, verbose_name="Department")
    ward = models.CharField(max_length=100, verbose_name="Ward")
    reported_by = models.CharField(max_length=100, verbose_name="Reported By")
    equipment_name = models.CharField(max_length=100, verbose_name="Equipment Name")
    model = models.CharField(max_length=100, verbose_name="Model")
    brand = models.CharField(max_length=100, verbose_name="Brand")
    serial_number = models.CharField(max_length=100, verbose_name="Serial Number")
    fault_reported = models.TextField(verbose_name="Fault Reported")
    diagnosis = models.TextField(verbose_name="Diagnosis")
    action_done = models.TextField(verbose_name="Action Done")
    required_spare_parts = models.TextField(verbose_name="Required Spare Parts")
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='job_cards')


    class Meta:
        verbose_name = "Job Card"
        verbose_name_plural = "Job Cards"
        ordering = ['-reporting_date']  # Order by reporting date, newest first

    def save(self, *args, **kwargs):
        """
        Override save method to ensure job_number and request_number are auto-incremented.
        """
        if not self.pk:  # Check if the instance is new
            # Auto-increment logic for job_number
            last_job = JobCard.objects.aggregate(Max('job_number'))
            self.job_number = (last_job['job_number__max'] or 0) + 1

            # Auto-increment logic for request_number
            last_request = JobCard.objects.aggregate(Max('request_number'))
            self.request_number = (last_request['request_number__max'] or 0) + 1

        super().save(*args, **kwargs)  # Call the real save() method

    def __str__(self):
        """
        String representation of the JobCard instance.
        """
        return f"Job Card {self.job_number} - {self.equipment_name}"

    @staticmethod
    def generate_summary_report(start_date, end_date):
        """
        Generate a summary report of job cards within a specified date range.

        :param start_date: The start date of the report period.
        :param end_date: The end date of the report period.
        :return: A dictionary with report data.
        """
        report_data = JobCard.objects.filter(
            reporting_date__range=[start_date, end_date]
        ).values(
            'status'
        ).annotate(
            count=models.Count('id')
        ).order_by('status')

        return report_data
