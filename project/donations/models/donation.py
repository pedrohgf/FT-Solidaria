from django.db import models
from .giver import Giver
from .receiver import Receiver

class Donation(models.Model):
    giver = models.ForeignKey(Giver, on_delete=models.CASCADE)
    receiver = models.ForeignKey(Receiver, on_delete=models.CASCADE, blank=True, null=True)
    items = models.TextField(max_length=256)

    def __str__(self):
        return '{} - {}'.format(self.giver, self.items)