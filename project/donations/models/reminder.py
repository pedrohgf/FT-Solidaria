from django.db import models
from .serializer import serialize
from .giver import Giver

@serialize
class Reminder(models.Model):
    date = models.DateField(blank=True, null=True)
    giver = models.ForeignKey(Giver, on_delete=models.CASCADE)
    
    def __str__(self):
        return '{}: {}'.format(self.giver.name, self.date)
