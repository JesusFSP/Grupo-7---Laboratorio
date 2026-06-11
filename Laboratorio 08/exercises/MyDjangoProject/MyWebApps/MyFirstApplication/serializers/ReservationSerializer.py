from rest_framework import serializers
from ..models.Reservation import Reservation
from .CustomerSerializer import CustomerSerializer
from .TableSerializer import TableSerializer

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'

class ReservationDetailSerializer(ReservationSerializer):
    customer = CustomerSerializer(read_only=True)
    table = TableSerializer(read_only=True)