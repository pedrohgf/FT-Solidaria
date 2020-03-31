from django.http import JsonResponse
from django.shortcuts import render
from .models import Donation

# example api endpoint
def get_donations(request):
    data = [
        {
            'attr_example': 'obj.attr_example',
            'attr_example2': 'obj.attr_example2',
            'attr_example3': 'obj.attr_example3',
        } for obj in Donation.objects.all()
    ]
    return JsonResponse(data, safe=False)  
    
