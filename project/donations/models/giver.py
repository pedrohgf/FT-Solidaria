from django.db import models
from .user import User
from .serializer import serialize

@serialize
class Giver(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.username
