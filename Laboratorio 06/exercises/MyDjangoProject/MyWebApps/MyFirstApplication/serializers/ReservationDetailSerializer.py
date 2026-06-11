from rest_framework import serializers
from ..models import Reservation
from .CustomerSerializer import CustomerSerializer
from .TableSerializer import TableSerializer


class ReservationDetailSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer(read_only=True)
    table = TableSerializer(read_only=True)

    class Meta:
        model = Reservation
        fields = '__all__'