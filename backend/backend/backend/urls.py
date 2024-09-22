"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse, HttpResponse

# Simple view for the root URL
def home_view(request):
    return HttpResponse("Welcome to MediTrack Pro!")

# Dummy view for PPM tasks
def dummy_ppm_tasks(request):
    return JsonResponse({"message": "This is a dummy response for PPM tasks."})

# Dummy view for Equipment
def dummy_equipment(request):
    return JsonResponse({"message": "This is a dummy response for Equipment."})

# Dummy view for Daily Logs
def dummy_daily_logs(request):
    return JsonResponse({"message": "This is a dummy response for Daily Logs."})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/', include('accounts.urls')),  # Route for accounts app URLs
    path('api/v1/jobcards/', include('jobcard.urls')),  # Route for jobcard app URLs
    
    # Dummy routes
    path('api/v1/ppm-tasks/', dummy_ppm_tasks, name='ppm-tasks'),
    path('api/v1/equipment/', dummy_equipment, name='equipment'),
    path('api/v1/dailylogs/', dummy_daily_logs, name='daily-logs'),

    path('', home_view, name='home'),  # Root URL pattern
]

