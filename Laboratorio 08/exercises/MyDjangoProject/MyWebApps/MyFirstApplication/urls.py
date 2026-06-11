from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet, TableViewSet, MenuCategoryViewSet, MenuItemViewSet, ReservationViewSet

router = DefaultRouter()
router.register(r'customers', CustomerViewSet, basename='customer')
router.register(r'tables', TableViewSet, basename='table')
router.register(r'categories', MenuCategoryViewSet, basename='category')
router.register(r'menu-items', MenuItemViewSet, basename='menuitem')
router.register(r'reservations', ReservationViewSet, basename='reservation')

urlpatterns = router.urls