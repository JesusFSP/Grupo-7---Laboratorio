from django.shortcuts import render
from .models import MenuItem, MenuCategory, Table, Reservation

def home(request):
    return render(request, 'MyFirstApplication/home.html')

def menu_list(request):
    items = MenuItem.objects.all()
    return render(
        request,
        'MyFirstApplication/menu_list.html',
        {'items': items}
    )

def category_list(request):
    categories = MenuCategory.objects.all()
    return render(
        request,
        'MyFirstApplication/category_list.html',
        {'categories': categories}
    )

def table_list(request):
    tables = Table.objects.all()
    return render(
        request,
        'MyFirstApplication/table_list.html',
        {'tables': tables}
    )

def reservation_list(request):
    reservations = Reservation.objects.all()
    return render(
        request,
        'MyFirstApplication/reservation_list.html',
        {'reservations': reservations}
    )