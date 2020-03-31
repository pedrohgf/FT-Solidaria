from django.db import models
from django.contrib.auth.models import User

class Receiver(models.Model):
    address = models.TextField(max_length=256)
    name = models.CharField(max_length=256)
    payment_ref = models.CharField(max_length=256)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name or self.user.name

    def to_json(self):
        return {
            'address': self.address if self.address else None,
            'name': self.name if self.name else None,
            'payment_ref': self.payment_ref if self.payment_ref else None,
            'user': (self.user.username) if self.user else None
        }