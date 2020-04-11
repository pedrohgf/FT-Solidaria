from django.http import JsonResponse
from django.shortcuts import render
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
import json
import sys

def handle_request_errors(func):
    def caller(*args, **kwargs):
        try:
            return func(*args, **kwargs)
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
    @handle_request_errors
    def wrapper(request):
        attrs = {}
        if request.body:
            attrs = json.loads(request.body)
        return JsonResponse([ obj.to_json() for obj in class_.objects.all().filter(**attrs) ], safe=False)  
    return wrapper

def create_objects(class_):
    ''' gets attrs dict on request body and returns created object '''

    @csrf_exempt_on_debug
    @handle_request_errors
    def wrapper(request):
        attrs = {}
        if request.body:
            attrs = json.loads(request.body)
        obj = class_(**attrs)
        obj.save()
        return JsonResponse(obj.to_json())  
    return wrapper
    
def update_objects(class_):
    ''' gets attrs dict on request body and updates object, returning it '''
    
    @csrf_exempt_on_debug
    @handle_request_errors
    def wrapper(request):
        attrs = {}
        if request.body:
            attrs = json.loads(request.body)
        obj = class_.objects.get(pk=attrs['id'])
        for attr in attrs:
            if attr == 'id': continue
            setattr(obj, attr, attrs[attr])
        obj.save()
        return JsonResponse(obj.to_json(), safe=False)  
    return wrapper

def delete_objects(class_):
    @csrf_exempt_on_debug
    @handle_request_errors
    def wrapper(request):
        attrs = {}
        if request.body:
            attrs = json.loads(request.body)
        obj = class_.objects.get(pk=attrs['id'])
        if obj:
            obj.delete()
        else:
            raise Exception('ObjectNotFoundError; does the supplied id exist?')
        return JsonResponse(obj.to_json(), safe=False)  
    return wrapper
