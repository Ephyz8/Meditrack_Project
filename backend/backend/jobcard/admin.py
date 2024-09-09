from django.contrib import admin
from .models import JobCard

class JobCardAdmin(admin.ModelAdmin):
    """
    Custom admin interface for the JobCard model.
    """
    # Fields to display in the list view
    list_display = (
        'job_number', 'request_number', 'reporting_date', 'department',
        'ward', 'reported_by', 'equipment_name', 'model', 'brand',
        'serial_number', 'fault_reported', 'diagnosis', 'action_done',
        'required_spare_parts'
    )
    
    # Fields to search through in the list view
    search_fields = (
        'job_number', 'request_number', 'department', 'ward', 'reported_by',
        'equipment_name', 'model', 'brand', 'serial_number', 'fault_reported',
        'diagnosis', 'action_done', 'required_spare_parts'
    )
    
    # Filters available in the sidebar
    list_filter = (
        'reporting_date', 'department', 'ward', 'equipment_name'
    )
    
    # Custom form layout with fieldsets
    fieldsets = (
        (None, {
            'fields': ('job_number', 'request_number', 'reporting_date')
        }),
        ('Job Details', {
            'fields': ('department', 'ward', 'reported_by', 'equipment_name', 'model', 'brand', 'serial_number')
        }),
        ('Fault and Diagnosis', {
            'fields': ('fault_reported', 'diagnosis', 'action_done', 'required_spare_parts')
        }),
    )
    
    # Read-only fields, useful for fields you want to display but not edit
    readonly_fields = ('job_number', 'request_number')

# Register the JobCard model with the custom admin interface
admin.site.register(JobCard, JobCardAdmin)
