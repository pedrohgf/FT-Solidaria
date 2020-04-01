from django.contrib import admin
from .models import Donation, RequestedDonation, Giver, Info, ONG, Volunteer

admin.site.register(Donation)
admin.site.register(RequestedDonation)
admin.site.register(Giver)
admin.site.register(ONG)
admin.site.register(Info)
admin.site.register(Volunteer)
