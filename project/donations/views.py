from django.http import JsonResponse
from django.shortcuts import render
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
import json
import sys

def handle_errors(func):
    def caller(*args, **kwargs):
        try:
            func(*args, **kwargs)
        except Exception as e:
            response = JsonResponse({'message': repr(e)})
            response.status_code = 400
            return response
    return caller

def csrf_exempt_on_debug(func):
    return csrf_exempt(func) if settings.DEBUG else func

def get_objects(class_):
    ''' gets attrs dict on request body and returns all matching items '''
    
    @csrf_exempt_on_debug
    @handle_errors
    def wrapper(request):
        return JsonResponse([ obj.to_json() for obj in class_.objects.all().filter(**json.loads(request.body)['attrs']) ], safe=False)  
    return wrapper

def create_objects(class_):
    ''' gets attrs dict on request body and returns created object '''

    @csrf_exempt_on_debug
    @handle_errors
    def wrapper(request):
        obj = class_(**json.loads(request.body)['attrs'])
        obj.save()
        return JsonResponse(obj.to_json())  
    return wrapper
    
def update_objects(class_):
    ''' gets attrs dict on request body and updates object, returning it '''
    
    @csrf_exempt_on_debug
    @handle_errors
    def wrapper(request):
        attrs = json.loads(request.body)['attrs']
        obj = class_.objects.get(pk=attrs['pk'])
        for attr in attrs:
            if attr == 'pk': continue
            setattr(obj, attr, attrs[attr])
        obj.save()
        return JsonResponse(obj.to_json(), safe=False)  
    return wrapper