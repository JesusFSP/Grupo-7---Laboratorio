from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'customers', views.CustomerViewSet, basename='customer')
router.register(r'tables', views.TableViewSet, basename='table')
router.register(r'categories', views.MenuCategoryViewSet, basename='category')
router.register(r'menu-items', views.MenuItemViewSet, basename='menu-item')
router.register(r'reservations', views.ReservationViewSet, basename='reservation')

urlpatterns = [
    path('', views.home, name='home'),
    path('menu/', views.menu_list, name='menu_list'),
    path('categorias/', views.category_list, name='category_list'),
    path('mesas/', views.table_list, name='table_list'),
    path('reservas/', views.reservation_list, name='reservation_list'),

    path('api/', include(router.urls)),
]