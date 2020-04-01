from django.db import models
from .serializer import serialize
from .giver import Giver
from .ong import ONG

@serialize
class Favored(models.Model):
    giver = models.ForeignKey(Giver, on_delete=models.CASCADE)
    ong = models.ForeignKey(ONG, on_delete=models.CASCADE)
    def __str__(self):
        return '{}: {}'.format(self.giver.name, self.ong)
