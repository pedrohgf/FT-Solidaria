from django.db import models
from .user import User
from .serializer import serialize

statuses = (
    ('ACTIVE', 'Ativo'),
    ('INACTIVE', 'Inativo'),
)

@serialize
class Giver(models.Model):
    address = models.TextField(max_length=256)
    name = models.CharField(max_length=256)
    email = models.EmailField(max_length=256)
    phone = models.CharField(max_length=256)
    status= models.CharField(max_length=255, default='ACTIVE', choices=statuses)
    facebook = models.CharField(max_length=256, null=True, blank=True)
    instagram = models.CharField(max_length=256, null=True, blank=True)
    twitter = models.CharField(max_length=256, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    
    def __str__(self):
        return self.name
