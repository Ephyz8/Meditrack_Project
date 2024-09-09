from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import get_object_or_404
from .models import JobCard
from .serializers import JobCardSerializer
from .tasks import send_job_card_report_email
from .utils import format_job_card_details, get_next_request_number

class JobCardViewSet(viewsets.ViewSet):
    """
    ViewSet for handling JobCard operations including listing, creating, updating, and retrieving job cards.
    """

    def list(self, request):
        """
        List all job cards with optional filtering.
        """
        queryset = JobCard.objects.all()
        serializer = JobCardSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        """
        Create a new job card.
        """
        serializer = JobCardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """
        Retrieve a specific job card by its ID.
        """
        job_card = get_object_or_404(JobCard, pk=pk)
        serializer = JobCardSerializer(job_card)
        return Response(serializer.data)

    def update(self, request, pk=None):
        """
        Update a specific job card.
        """
        job_card = get_object_or_404(JobCard, pk=pk)
        serializer = JobCardSerializer(job_card, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        """
        Partially update a specific job card.
        """
        job_card = get_object_or_404(JobCard, pk=pk)
        serializer = JobCardSerializer(job_card, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        """
        Delete a specific job card.
        """
        job_card = get_object_or_404(JobCard, pk=pk)
        job_card.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=['post'])
    def generate_summary_report(self, request):
        """
        Generate a summary report of job cards within a specified date range and email it.
        """
        start_date = request.data.get('start_date')
        end_date = request.data.get('end_date')

        if not start_date or not end_date:
            return Response({"detail": "Both start_date and end_date are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            report_data = JobCard.generate_summary_report(start_date, end_date)
            # Format report for email
            email_subject = "Job Card Summary Report"
            email_message = "Summary Report:\n\n" + str(report_data)
            recipient_list = [settings.DEFAULT_FROM_EMAIL]  # Use configured email for testing
            send_job_card_report_email.delay(email_subject, email_message, recipient_list)

            return Response({"detail": "Summary report generated and email sent."}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
