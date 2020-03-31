from django.contrib import admin
from .models import Donation, RequestedDonation, Giver, Info, Store, ONG

admin.site.register(Donation)
admin.site.register(RequestedDonation)
admin.site.register(Giver)
admin.site.register(Info)
admin.site.register(Store)
admin.site.register(ONG)
