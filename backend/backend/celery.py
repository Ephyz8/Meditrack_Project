from __future__ import absolute_import, unicode_literals
import os
from backend.backend.celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'meditrack_pro.settings')

app = Celery('backend')
app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()
