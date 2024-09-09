from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobCardListView, JobCardViewSet

router = DefaultRouter()
router.register(r'job-cards', JobCardViewSet, basename='jobcard')

urlpatterns = [
    path('job-cards/', JobCardListView.as_view(), name='jobcard-list'),
    path('', include(router.urls)),
]
