from django.db import models
from django.core.exceptions import ValidationError
from .BaseModel import BaseModel
from .Customer import Customer
from .Table import Table

class Reservation(BaseModel):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    table = models.ForeignKey(Table, on_delete=models.CASCADE)
    reservation_date = models.DateTimeField(null=False)
    guest_count = models.PositiveIntegerField(null=False)
    special_requests = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-reservation_date']
        constraints = [
            models.UniqueConstraint(fields=['table', 'reservation_date'], name='unique_table_reservation')
        ]

    def clean(self):
        if self.guest_count > self.table.seating_capacity:
            raise ValidationError("La cantidad de invitados supera la capacidad de la mesa.")
        super(Reservation, self).clean()

    def save(self, *args, **kwargs):
        self.clean()
        return super(Reservation, self).save(*args, **kwargs)

    def __str__(self):
        return "Reserva: %s - Mesa %s - %s" % (self.customer.last_name, self.table.table_number, self.reservation_date.strftime('%Y-%m-%d %H:%M'))