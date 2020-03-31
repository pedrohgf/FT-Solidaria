from django.db import models
from .receiver import Receiver

class RequestedDonation(models.Model):
    receiver = models.ForeignKey(Receiver, on_delete=models.CASCADE, blank=True, null=True)
    items = models.TextField(max_length=256)

    def __str__(self):
        return '{} - {}'.format(self.receiver, self.items)
