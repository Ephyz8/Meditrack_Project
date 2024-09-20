from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken  # Import JWT token generation
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from django.utils.encoding import smart_str, DjangoUnicodeDecodeError
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_decode

from .serializers import (
    UserRegisterSerializer,
    SetNewPasswordSerializer,
    LoginSerializer,
    PasswordResetRequestSerializer,
    LogoutUserSerializer
)
from .tasks import send_otp_email_task
from .models import OneTimePassword, User


# Helper function to generate JWT tokens for users
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'role': user.role  # Include user role in the response
    }


class RegisterUserView(GenericAPIView):
    serializer_class = UserRegisterSerializer

    def post(self, request):
        user_data = request.data
        serializer = self.serializer_class(data=user_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            try:
                send_otp_email_task.delay(user.email)  # Send OTP using Celery
            except Exception as e:
                return Response({
                    'message': 'Account created but failed to send OTP. Try again later.'
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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


class ResendOTPView(GenericAPIView):
    def post(self, request):
        email = request.data.get('email')

        if not email:
            return Response({'message': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'message': 'No user found with this email'}, status=status.HTTP_404_NOT_FOUND)

        if user.is_verified:
            return Response({'message': 'User is already verified'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Send a new OTP
            send_otp_email_task.delay(user.email)
        except Exception as e:
            return Response({
                'message': 'Failed to send OTP. Please try again later.'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({
            'message': f'A new OTP has been sent to {user.email}. Please check your email.'
        }, status=status.HTTP_200_OK)


# Updated LoginUserView with JWT token generation
class LoginUserView(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(email=email, password=password)
        if user:
            if user.is_verified:
                token_data = get_tokens_for_user(user)  # Generate tokens and include user role
                return Response(token_data, status=status.HTTP_200_OK)
            return Response({"error": "Email is not verified."}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)


class TestAuthenticationView(GenericAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({'msg': 'It is working'}, status=status.HTTP_200_OK)


class PasswordResetRequestView(GenericAPIView):
    serializer_class = PasswordResetRequestSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        if serializer.is_valid(raise_exception=True):
            return Response({
                'message': "A reset password link has been sent to your email"
            }, status=status.HTTP_200_OK)


class PasswordResetConfirmView(GenericAPIView):
    def post(self, request, uidb64, token):
        try:
            user_id = smart_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=user_id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_401_UNAUTHORIZED)
            return Response({
                'success': True,
                'message': 'Valid token, please reset your password',
                'uidb64': uidb64,
                'token': token
            }, status=status.HTTP_200_OK)
        except DjangoUnicodeDecodeError as e:
            return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_401_UNAUTHORIZED)


class SetNewPasswordView(GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'message': 'Password reset successful'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutUserView(GenericAPIView):
    serializer_class = LogoutUserSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        request.user.auth_token.delete()
        return Response({'message': 'User logged out successfully'}, status=status.HTTP_200_OK)


# Get the authenticated user's role
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_role(request):
    if request.user.is_authenticated:
        user_role = request.user.role  # Fetch the user's role
        return Response({'role': user_role}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'User is not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)
