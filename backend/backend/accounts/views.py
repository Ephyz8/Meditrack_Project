from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegisterSerializer
from .tasks import send_otp_email_task  # Import the Celery task

class RegisterUserView(GenericAPIView):
    serializer_class = UserRegisterSerializer
    
    def post(self, request):
        user_data = request.data
        serializer = self.serializer_class(data=user_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            send_otp_email_task.delay(user.email)  # Use dot notation to access email
            return Response({
                'data': serializer.data,  # Use serializer.data to return serialized data
                'message': f'Hi {user.first_name}, your account has been created successfully. '
                           f'Please check your email to verify your account.'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
