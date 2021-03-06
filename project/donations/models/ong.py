from django.db import models
from .ong_category import ONGCategory
from .serializer import serialize

statuses = (
    ('PENDING', 'Aprovação pendente'),
    ('DENIED', 'Aprovação negada'),
    ('APPROVED', 'Aprovação deferida'),
    ('INACTIVE', 'Desativada'),
)

@serialize
class ONG(models.Model):
    address = models.TextField(max_length=256)
    name = models.CharField(max_length=256)
    site = models.CharField(max_length=256)
    description = models.TextField(max_length=256)
    ongcategory = models.ForeignKey(ONGCategory, on_delete=models.CASCADE)
    facebook = models.CharField(max_length=256, null=True, blank=True)
    instagram = models.CharField(max_length=256, null=True, blank=True)
    twitter = models.CharField(max_length=256, null=True, blank=True)
    message = models.CharField(max_length=256, null=True, blank=True)
    target = models.IntegerField(default=0)
    status = models.CharField(max_length=256, default='PENDING', choices=statuses)
    city = models.CharField(max_length=256, default='', null=True, blank=True)
    state = models.CharField(max_length=256, default='', null=True, blank=True)
    phone = models.CharField(max_length=256, default='')
    zip_code = models.CharField(max_length=256, default='')

    def __str__(self):
        return self.name
