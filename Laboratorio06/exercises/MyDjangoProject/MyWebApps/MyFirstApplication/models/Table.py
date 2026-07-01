from django.db import models
from .BaseModel import BaseModel

class Table(BaseModel):
    LOCATIONS = [
        ('TERRAZA', 'Terraza'),
        ('INTERIOR', 'Salón Interior'),
        ('VIP', 'Zona VIP'),
    ]
    table_number = models.IntegerField(unique=True, null=False)
    seating_capacity = models.PositiveIntegerField(null=False, default=2)
    is_available = models.BooleanField(default=True, null=False)
    location = models.CharField(max_length=20, choices=LOCATIONS, default='INTERIOR')

    class Meta:
        ordering = ['table_number']

    def __str__(self):
        return "Mesa %s (%s pax) - %s" % (self.table_number, self.seating_capacity, self.location)