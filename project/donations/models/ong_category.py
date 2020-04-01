from django.db import models
from .serializer import serialize

@serialize
class ONGCategory(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField(max_length=256)

    def __str__(self):
        return self.name
