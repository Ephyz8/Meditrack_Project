from django.urls import path
from .views import (
    RegisterUserView, 
    VerifyUserEmail, 
    LoginUserView, 
    TestAuthenticationView, 
    PasswordResetConfirmView, 
    PasswordResetRequestView, 
    SetNewPasswordView,
    LogoutUserView,
    ResendOTPView,
    get_user_role  
)

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('verify-email/', VerifyUserEmail.as_view(), name='verify-email'), 
    path('resend-otp/', ResendOTPView.as_view(), name='resend-otp'),  
    path('login/', LoginUserView.as_view(), name='login'),
    path('profile/', TestAuthenticationView.as_view(), name='granted'),
    path('password-reset/', PasswordResetRequestView.as_view(), name='password-reset'),
    path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password-reset-confirm'),
    path('set-new-password/', SetNewPasswordView.as_view(), name='set-new-password'),
    path('logout/', LogoutUserView.as_view(), name='logout'),
    path('api/v1/auth/user-role/', get_user_role, name='user-role'),
]
