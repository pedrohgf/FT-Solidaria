from django.db import models
from django.contrib.auth.models import User
from .serializer import serialize

@serialize
class ONG(models.Model):
    address = models.TextField(max_length=256)
    name = models.CharField(max_length=256)
    site = models.CharField(max_length=256)

    def __str__(self):
        return self.name or self.user.name
