from django.db import models
from .BaseModel import BaseModel

class Customer(BaseModel):
    first_name = models.CharField(null=False, blank=False, max_length=155)
    last_name = models.CharField(null=False, blank=False, max_length=155)
    email = models.EmailField(unique=True, null=True, blank=True, max_length=255)
    phone_number = models.CharField(null=True, blank=True, max_length=20)

    class Meta:
        ordering = ['last_name', 'first_name']

    def save(self, *args, **kwargs):
        self.first_name = self.first_name.upper()
        self.last_name = self.last_name.upper()
        return super(Customer, self).save(*args, **kwargs)

    def __str__(self):
        return "%s %s" % (self.first_name, self.last_name)