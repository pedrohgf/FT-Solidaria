from django.db import models
from .giver import Giver
from .ong import ONG
from .serializer import serialize

@serialize
class Donation(models.Model):
    giver = models.ForeignKey(Giver, on_delete=models.CASCADE)
    ong = models.ForeignKey(ONG, on_delete=models.CASCADE, blank=True, null=True)
    items = models.TextField(max_length=256)
    picked = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)

    def __str__(self):
        return '{} - {}'.format(self.giver, self.items)
