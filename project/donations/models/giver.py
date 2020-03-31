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

    def to_json(self):
        return {
            'address': self.address if self.address else None,
            'name': self.name if self.name else None,
            'email': self.email if self.email else None,
            'phone': self.phone if self.phone else None,
            'user': str(self.user.username) if self.user else None,
        }