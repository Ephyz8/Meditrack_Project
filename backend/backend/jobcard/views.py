from rest_framework import generics
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from .models import JobCard
from .serializers import JobCardSerializer
from .tasks import send_job_card_report_email, generate_job_card_summary_report
from .utils import format_job_card_details

class JobCardListView(generics.ListCreateAPIView):
    """
    List all job cards or create a new job card.
    """
    queryset = JobCard.objects.all()
    serializer_class = JobCardSerializer

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
            job_card = serializer.save()
            # Send an email notification for the new job card
            send_job_card_report_email.delay(
                subject=f"New Job Card Created - {job_card.job_number}",
                message=format_job_card_details(job_card),
                recipient_list=[job_card.user.email]  # Ensure job_card.user.email is correctly set
            )
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
            # Call the Celery task to generate the report and send it via email
            generate_job_card_summary_report.delay(start_date, end_date)
            return Response({"detail": "Summary report is being generated and will be emailed shortly."}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
