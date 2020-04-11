"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from donations.views import get_objects, create_objects, update_objects, delete_objects
from donations.models import *

endpoints = [
    path('api/v1/get/donations/', get_objects(Donation)),
    path('api/v1/get/requested_donations/', get_objects(RequestedDonation)),
    path('api/v1/get/givers/', get_objects(Giver)),
    path('api/v1/get/ongs/', get_objects(ONG)),
    path('api/v1/get/volunteers/', get_objects(Volunteer)),
    path('api/v1/get/reminders/', get_objects(Reminder)),
    path('api/v1/get/favoreds/', get_objects(Favored)),
    path('api/v1/get/infos/', get_objects(Info)),
    path('api/v1/get/ong_category/', get_objects(ONGCategory)),
    path('api/v1/get/users/', get_objects(User)),
    
    path('api/v1/create/donations/', create_objects(Donation)),
    path('api/v1/create/requested_donations/', create_objects(RequestedDonation)),
    path('api/v1/create/givers/', create_objects(Giver)),
    path('api/v1/create/ongs/', create_objects(ONG)),
    path('api/v1/create/volunteers/', create_objects(Volunteer)),
    path('api/v1/create/reminders/', create_objects(Reminder)),
    path('api/v1/create/favoreds/', create_objects(Favored)),
    path('api/v1/create/infos/', create_objects(Info)),
    path('api/v1/create/ong_category/', create_objects(ONGCategory)),
    path('api/v1/create/users/', create_objects(User)),
    
    path('api/v1/update/donations/', update_objects(Donation)),
    path('api/v1/update/requested_donations/', update_objects(RequestedDonation)),
    path('api/v1/update/givers/', update_objects(Giver)),
    path('api/v1/update/ongs/', update_objects(ONG)),
    path('api/v1/update/volunteers/', update_objects(Volunteer)),
    path('api/v1/update/reminders/', update_objects(Reminder)),
    path('api/v1/update/favoreds/', update_objects(Favored)),
    path('api/v1/update/infos/', update_objects(Info)),
    path('api/v1/update/ong_category/', update_objects(ONGCategory)),
    path('api/v1/update/users/', update_objects(User)),

    path('api/v1/delete/donations/', delete_objects(Donation)),
    path('api/v1/delete/requested_donations/', delete_objects(RequestedDonation)),
    path('api/v1/delete/givers/', delete_objects(Giver)),
    path('api/v1/delete/ongs/', delete_objects(ONG)),
    path('api/v1/delete/volunteers/', delete_objects(Volunteer)),
    path('api/v1/delete/reminders/', delete_objects(Reminder)),
    path('api/v1/delete/favoreds/', delete_objects(Favored)),
    path('api/v1/delete/infos/', delete_objects(Info)),
    path('api/v1/delete/ong_category/', delete_objects(ONGCategory)),
    path('api/v1/delete/users/', delete_objects(User)),
]

urlpatterns = [
    path('admin/', admin.site.urls),
] + endpoints
