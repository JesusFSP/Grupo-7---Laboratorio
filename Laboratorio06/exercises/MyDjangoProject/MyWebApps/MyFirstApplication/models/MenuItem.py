from django.db import models
from .BaseModel import BaseModel
from .MenuCategory import MenuCategory

class MenuItem(BaseModel):
    category = models.ForeignKey(MenuCategory, on_delete=models.CASCADE)
    item_name = models.CharField(null=False, blank=False, max_length=155)
    price = models.DecimalField(null=False, max_digits=6, decimal_places=2) #[cite: 5]
    is_vegetarian = models.BooleanField(default=False, null=False)

    class Meta:
        ordering = ['category', 'item_name']

    def save(self, *args, **kwargs):
        self.item_name = self.item_name.title()
        return super(MenuItem, self).save(*args, **kwargs)

    def __str__(self):
        return "%s - S/ %s" % (self.item_name, self.price)