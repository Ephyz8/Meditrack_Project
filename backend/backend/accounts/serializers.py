from rest_framework import serializers
from .models import User  # Import custom User model
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    password2 = serializers.CharField(max_length=68, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def validate(self, attrs):
        password = attrs.get('password', '')
        password2 = attrs.get('password2', '')
        if password != password2:
            raise AuthenticationFailed({'password': 'Passwords must match.'})
        return attrs

    def create(self, validated_data):
        # Remove password2 as it is not needed for creating the user
        validated_data.pop('password2')
        user = User.objects.create_user(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=validated_data['password'],
        )
        return user


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=6)
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    full_name = serializers.CharField(max_length=255, read_only=True)
    access_token = serializers.CharField(max_length=255, read_only=True)
    refresh_token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'full_name', 'access_token', 'refresh_token']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')
        request = self.context.get('request')
        user = authenticate(request=request, email=email, password=password)
        if not user:
            raise AuthenticationFailed({'error': 'Invalid credentials, please try again'})
        if not user.is_verified:
            raise AuthenticationFailed({'error': 'Email is not verified'})

        # `user.tokens()` generates JWT tokens
        user_tokens = user.tokens()

        return {
            'email': user.email,
            #'full_name': user.get_full_name(),
            'access_token': str(user_tokens.get('access')),
            'refresh_token': str(user_tokens.get('refresh'))
        }


class TestAuthenticationSerializer(serializers.Serializer):
    msg = serializers.CharField(max_length=255)


class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255, min_length=6)

    class Meta:
        fields = ['email']

    def validate(self, attrs):
        email = attrs.get('email', '')
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            request = self.context.get('request')
            site_domain = get_current_site(request).domain
            relative_link = reverse('password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})
            abslink = f'http://{site_domain}{relative_link}'
            email_body = f'Hello, \nUse the link below to reset your password \n{abslink}'
            data = {
                'email_body': email_body,
                'to_email': user.email,
                'email_subject': 'Reset your password'
            }
            send_normal_email(data)
        else:
            raise ValidationError({'email': 'This email address is not registered.'})

        return super().validate(attrs)


class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    password2 = serializers.CharField(max_length=68, min_length=6, write_only=True)
    uidb64 = serializers.CharField(write_only=True)
    token = serializers.CharField(write_only=True)

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return attrs

    def save(self):
        try:
            uid = force_str(urlsafe_base64_decode(self.validated_data['uidb64']))
            user = User.objects.get(id=uid)
            token = self.validated_data['token']
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed('The reset link is invalid or has expired.')
            
            user.set_password(self.validated_data['password'])
            user.save()
            return user
        except (TypeError, ValueError, OverflowError, User.DoesNotExist, DjangoUnicodeDecodeError):
            raise AuthenticationFailed('The reset link is invalid or has expired.')


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    default_error_messages = {
        'bad_token': ('Token is expired or invalid.')
    }
    
    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs
    
    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail('bad_token')