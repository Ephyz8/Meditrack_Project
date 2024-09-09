from django.urls import path
from .views import (
    JobCardListView,
    JobCardDetailView,
    JobCardCreateView,
    JobCardUpdateView,
    JobCardDeleteView
)

app_name = 'jobcard'

urlpatterns = [
    path('', JobCardListView.as_view(), name='job_card_list'),
    path('job_card/<int:pk>/', JobCardDetailView.as_view(), name='job_card_detail'),
    path('job_card/new/', JobCardCreateView.as_view(), name='job_card_create'),
    path('job_card/<int:pk>/edit/', JobCardUpdateView.as_view(), name='job_card_edit'),
    path('job_card/<int:pk>/delete/', JobCardDeleteView.as_view(), name='job_card_delete'),
]
