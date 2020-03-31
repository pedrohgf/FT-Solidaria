from django.contrib import admin
from .models import Donation, RequestedDonation, Giver, Info, Store

admin.site.register(Donation)
admin.site.register(RequestedDonation)
admin.site.register(Giver)
admin.site.register(Info)
admin.site.register(Store)
# Register your models here.
