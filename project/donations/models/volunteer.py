from django.db import models
from .user import User
from .ong import ONG
from .serializer import serialize

roles = [
    ('logistics', 'Logística'),
    ('coordenation', 'Coordenação'),
]

@serialize
class Volunteer(models.Model):
    role = models.CharField(max_length=256, choices=roles)
    ong = models.ForeignKey(ONG, on_delete=models.CASCADE)
    range_limit = models.IntegerField(verbose_name='Raio (km)', default=5, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.name
