from django.db import models
from .ong import ONG
from .serializer import serialize

@serialize
class RequestedDonation(models.Model):
    ong = models.ForeignKey(ONG, on_delete=models.CASCADE, blank=True, null=True)
    items = models.TextField(max_length=256)

    def __str__(self):
        return '{} - {}'.format(self.ong, self.items)
