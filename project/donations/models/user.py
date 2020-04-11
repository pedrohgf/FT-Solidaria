from django.db import models
from .serializer import serialize
from django.contrib.auth.models import User as django_default_user

@serialize
class User(django_default_user):
    pass