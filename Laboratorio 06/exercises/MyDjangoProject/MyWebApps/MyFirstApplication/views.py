from django.shortcuts import render
from .models import MenuItem

def home(request):
    return render(request, 'MyFirstApplication/home.html')

def menu_list(request):
    items = MenuItem.objects.all()
    return render(
        request,
        'MyFirstApplication/menu_list.html',
        {'items': items}
    )