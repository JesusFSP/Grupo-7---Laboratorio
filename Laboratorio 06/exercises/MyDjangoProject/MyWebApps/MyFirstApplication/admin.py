from django.contrib import admin
from .models import Customer, Table, MenuCategory, MenuItem, Reservation

class CustomerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'status')
    search_fields = ('first_name', 'last_name')

class TableAdmin(admin.ModelAdmin):
    list_display = ('table_number', 'seating_capacity', 'location', 'is_available')
    list_filter = ('location', 'is_available')

class MenuCategoryAdmin(admin.ModelAdmin):
    list_display = ('category_name', 'status')

class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('item_name', 'category', 'price', 'is_vegetarian')
    list_filter = ('is_vegetarian', 'category')

class ReservationAdmin(admin.ModelAdmin):
    list_display = ('customer', 'table', 'reservation_date', 'guest_count')
    list_filter = ('reservation_date',)

admin.site.register(Customer, CustomerAdmin)
admin.site.register(Table, TableAdmin)
admin.site.register(MenuCategory, MenuCategoryAdmin)
admin.site.register(MenuItem, MenuItemAdmin)
admin.site.register(Reservation, ReservationAdmin)