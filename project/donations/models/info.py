from django.db import models
from .serializer import serialize

@serialize
class Info(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()
    date = models.DateField(auto_now=True)
    source = models.CharField(max_length=256)

    def __str__(self):
        return self.title
