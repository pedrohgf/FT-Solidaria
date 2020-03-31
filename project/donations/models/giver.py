from django.db import models
from django.contrib.auth.models import User

class Giver(models.Model):
    address = models.TextField(max_length=256)
    name = models.CharField(max_length=256)
    email = models.EmailField(max_length=256)
    phone = models.CharField(max_length=256)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    
    def __str__(self):
        return self.name
