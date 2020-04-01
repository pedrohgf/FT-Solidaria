from django.http import JsonResponse
from django.shortcuts import render

def get_objects(class_):
    def wrapper(request):
        print(request.POST)
        return JsonResponse([ obj.to_json() for obj in class_.objects.all() ], safe=False)  
    return wrapper

# pending tests
def create_objects(class_):
    def wrapper(request):
        print(request.POST)
        obj = class_(**request.POST['attrs'])
        obj.save()
        return JsonResponse({'pk': obj.pk})  
    return wrapper
    
# pending tests
def update_objects(class_):
    def wrapper(request):
        print(request.POST)
        obj = class_.objects.get(pk=request.POST['attrs']['pk'])
        for attr in request.POST['attrs']:
            if attr == 'pk': continue
            setattr(obj, attr, request.POST['attrs'][attr])
        obj.save()
        return JsonResponse(obj.to_json(), safe=False)  
    return wrapper