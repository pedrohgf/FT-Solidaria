from django.http import JsonResponse
from django.shortcuts import render
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
import json
import sys

def get_objects(class_):
    ''' gets attrs dict on request body and returns all matching items '''
    def wrapper(request):
        try:
            return JsonResponse([ obj.to_json() for obj in class_.objects.all().filter(**json.loads(request.body)['attrs']) ], safe=False)  
        except Exception as e:
            response = JsonResponse({'message': repr(e)})
            response.status_code = 400
            return response
    return csrf_exempt(wrapper) if settings.DEBUG else wrapper

def create_objects(class_):
    ''' gets attrs dict on request body and returns created object '''
    def wrapper(request):
        try:
            obj = class_(**json.loads(request.body)['attrs'])
            obj.save()
            return JsonResponse({'pk': obj.pk})  
        except Exception as e:
            response = JsonResponse({'message': repr(e)})
            response.status_code = 400
            return response
    return csrf_exempt(wrapper) if settings.DEBUG else wrapper
    
def update_objects(class_):
    ''' gets attrs dict on request body and updates object, returning it '''
    def wrapper(request):
        try:
            attrs = json.loads(request.body)['attrs']
            obj = class_.objects.get(pk=attrs['pk'])
            for attr in attrs:
                if attr == 'pk': continue
                setattr(obj, attr, attrs[attr])
            obj.save()
            return JsonResponse(obj.to_json(), safe=False)  
        except Exception as e:
            response = JsonResponse({'message': repr(e)})
            response.status_code = 400
            return response

    return csrf_exempt(wrapper) if settings.DEBUG else wrapper