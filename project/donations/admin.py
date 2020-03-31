from django.contrib import admin
from .models import Donation, RequestedDonation, Giver, Info, Receiver

admin.site.register(Donation)
admin.site.register(RequestedDonation)
admin.site.register(Giver)
admin.site.register(Receiver)
admin.site.register(Info)
