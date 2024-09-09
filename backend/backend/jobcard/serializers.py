from rest_framework import serializers
from .models import JobCard

class JobCardSerializer(serializers.ModelSerializer):
    """
    Serializer for JobCard model.
    Handles the serialization and deserialization of JobCard data.
    """

    class Meta:
        model = JobCard
        fields = [
            'id',                   # Assuming you want to include the primary key
            'job_number',
            'request_number',
            'reporting_date',
            'department',
            'ward',
            'reported_by',
            'equipment_name',
            'model',
            'brand',
            'serial_number',
            'fault_reported',
            'diagnosis',
            'action_done',
            'required_spare_parts',
        ]
        read_only_fields = ['job_number', 'request_number']  # Assuming these are auto-generated

    def validate_request_number(self, value):
        """
        Validate that the request number is positive.
        """
        if value <= 0:
            raise serializers.ValidationError("Request number must be a positive integer.")
        return value

    def create(self, validated_data):
        """
        Create and return a new JobCard instance, given the validated data.
        """
        # You might need to handle auto-incrementing fields here if necessary
        return JobCard.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing JobCard instance, given the validated data.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
