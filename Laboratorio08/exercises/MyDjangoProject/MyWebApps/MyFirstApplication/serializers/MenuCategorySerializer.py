from rest_framework import serializers
from ..models.MenuCategory import MenuCategory

class MenuCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuCategory
        fields = '__all__'

class MenuCategoryDetailSerializer(MenuCategorySerializer):
    items = serializers.SerializerMethodField()

    def get_items(self, obj):
        from .MenuItemSerializer import MenuItemSerializer
        queryset = obj.menuitem_set.all()
        return MenuItemSerializer(queryset, many=True).data