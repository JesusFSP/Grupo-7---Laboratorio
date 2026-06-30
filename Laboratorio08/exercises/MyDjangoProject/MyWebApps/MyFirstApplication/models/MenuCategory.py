from django.db import models
from .BaseModel import BaseModel

class MenuCategory(BaseModel):
    category_name = models.CharField(null=False, blank=False, max_length=100)
    description = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['category_name']

    def save(self, *args, **kwargs):
        self.category_name = self.category_name.upper()
        return super(MenuCategory, self).save(*args, **kwargs)

    def __str__(self):
        return self.category_name