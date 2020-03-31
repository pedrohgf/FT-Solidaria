from django.db import models
from django.contrib.auth.models import User
from .receiver import Receiver
roles = [
    ('logistics', 'Logística'),
    ('coordenation', 'Coordenação'),
]

class Volunteer(models.Model):
    role = models.CharField(max_length=256, choices=roles)
    address = models.TextField(max_length=256)
    range_limit = models.IntegerField(verbose_name='Raio (km)', default=5, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    receiver = models.ForeignKey(Receiver, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.name
