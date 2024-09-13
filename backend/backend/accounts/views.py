from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .serializers import UserRegisterSerializer, LoginSerializer, TestAuthenticationSerializer
from .tasks import send_otp_email_task  # Import the Celery task
from .models import OneTimePassword
from .utils import send_otp_email


class RegisterUserView(GenericAPIView):
    serializer_class = UserRegisterSerializer
    
    def post(self, request):
        user_data = request.data
        serializer = self.serializer_class(data=user_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            try:
                send_otp_email_task.delay(user.email)  # Use Celery task for sending OTP
            except Exception as e:
                return Response({'message': 'Account created but failed to send OTP. Try again later.'},
                                status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            return Response({
                'data': serializer.data,
                'message': f'Hi {user.first_name}, your account has been created successfully. '
                           f'Please check your email to verify your account.'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyUserEmail(GenericAPIView):
    def post(self, request):
        otp_code = request.data.get('otp')
        
        if not otp_code:
            return Response({'message': 'Passcode not provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user_code_obj = OneTimePassword.objects.get(otp=otp_code)
        except OneTimePassword.DoesNotExist:
            return Response({'message': 'Invalid or expired OTP'}, status=status.HTTP_404_NOT_FOUND)
        
        if user_code_obj.is_expired():
            return Response({'message': 'OTP has expired'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = user_code_obj.user
        if user.is_verified:
            return Response({'message': 'User is already verified'}, status=status.HTTP_400_BAD_REQUEST)
        
        user.is_verified = True
        user.save()
        return Response({'message': 'Account email verified successfully'}, status=status.HTTP_200_OK)


class LoginUserView(GenericAPIView):
    serializer_class = LoginSerializer
    
    def post(self, request):
        user_data = request.data
        serializer = self.serializer_class(data=user_data, context={'request': request})
        if serializer.is_valid(raise_exception=True):
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TestAuthenticationView(GenericAPIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        return Response({'msg': 'It is working'}, status=status.HTTP_200_OK)
