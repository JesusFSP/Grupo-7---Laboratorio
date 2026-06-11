from rest_framework import serializers
from ..models.MenuItem import MenuItem
from .MenuCategorySerializer import MenuCategorySerializer

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = '__all__'

class MenuItemDetailSerializer(MenuItemSerializer):
    category = MenuCategorySerializer(read_only=True)