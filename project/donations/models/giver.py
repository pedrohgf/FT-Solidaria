from django.db import models
from .user import User
from .serializer import serialize

@serialize
class Giver(models.Model):
    facebook = models.CharField(max_length=256, null=True, blank=True)
    instagram = models.CharField(max_length=256, null=True, blank=True)
    twitter = models.CharField(max_length=256, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.username
