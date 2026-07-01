from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Customer, Table, MenuCategory, MenuItem, Reservation
from .serializers import (
    CustomerSerializer, TableSerializer, 
    MenuCategorySerializer, MenuCategoryDetailSerializer,
    MenuItemSerializer, MenuItemDetailSerializer,
    ReservationSerializer, ReservationDetailSerializer
)

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.filter(status=True)
    serializer_class = CustomerSerializer
    permission_classes = [AllowAny]

class TableViewSet(viewsets.ModelViewSet):
    queryset = Table.objects.filter(status=True)
    serializer_class = TableSerializer
    permission_classes = [AllowAny]

class MenuCategoryViewSet(viewsets.ModelViewSet):
    queryset = MenuCategory.objects.filter(status=True)
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return MenuCategoryDetailSerializer
        return MenuCategorySerializer

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.filter(status=True)
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return MenuItemDetailSerializer
        return MenuItemSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.filter(status=True)
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ReservationDetailSerializer
        return ReservationSerializer