from django.db import models
from django.contrib.auth.models import User

class Receiver(models.Model):
    address = models.TextField(max_length=256)
    name = models.CharField(max_length=256)
    payment_ref = models.CharField(max_length=256)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name or self.user.name

    
