from django.shortcuts import render
from .models import MenuItem, MenuCategory, Table, Reservation

from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import Customer

from .serializers import (
    CustomerSerializer,
    TableSerializer,
    MenuCategorySerializer,
    MenuItemSerializer,
    ReservationSerializer,
    ReservationDetailSerializer,
)

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

class CustomerViewSet(viewsets.ModelViewSet):

    queryset = Customer.objects.all()
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        return CustomerSerializer

class TableViewSet(viewsets.ModelViewSet):

    queryset = Table.objects.all()
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        return TableSerializer


class MenuCategoryViewSet(viewsets.ModelViewSet):

    queryset = MenuCategory.objects.all()
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        return MenuCategorySerializer


class MenuItemViewSet(viewsets.ModelViewSet):

    queryset = MenuItem.objects.all()
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        return MenuItemSerializer


class ReservationViewSet(viewsets.ModelViewSet):

    queryset = Reservation.objects.all()
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ReservationDetailSerializer
        return ReservationSerializer