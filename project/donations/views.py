from django.http import JsonResponse
from django.shortcuts import render

def get_objects(class_):
    return lambda request: JsonResponse([ obj.to_json() for obj in class_.objects.all() ], safe=False)  

