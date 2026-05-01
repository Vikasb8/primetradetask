from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

# Router automatically creates REST URLs
router = DefaultRouter()
router.register('', TaskViewSet, basename='tasks')

urlpatterns = router.urls