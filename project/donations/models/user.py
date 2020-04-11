from django.db import models
from .serializer import serialize
from django.contrib.auth.models import User as django_default_user
import hashlib, binascii, os

statuses = (
    ('ACTIVE', 'Ativo'),
    ('INACTIVE', 'Inativo'),
)

def hash_password(password):
    salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
    pwdhash = hashlib.pbkdf2_hmac('sha512', password.encode('utf-8'), 
                                salt, 100000)
    pwdhash = binascii.hexlify(pwdhash)
    return (salt + pwdhash).decode('ascii')

@serialize
class User(django_default_user):
    address = models.TextField(max_length=256)
    phone = models.CharField(max_length=256)
    status= models.CharField(max_length=255, default='ACTIVE', choices=statuses)

    def auth(self, password):
        salt = self.password[:64]
        self.password = self.password[64:]
        pwdhash = hashlib.pbkdf2_hmac('sha512', 
                                    password.encode('utf-8'), 
                                    salt.encode('ascii'), 
                                    100000)
        pwdhash = binascii.hexlify(pwdhash).decode('ascii')
        return pwdhash == self.password[:128]

    def save(self, *args, **kwargs):
        if self.password:
            self.password = hash_password(self.password)[:128]
        super(User, self).save(*args, **kwargs)