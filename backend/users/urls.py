from django.urls import path
from .views import RegisterView

# JWT login view provided by library
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    # Register API
    path('register/', RegisterView.as_view()),

    # Login API (returns access + refresh token)
    path('login/', TokenObtainPairView.as_view()),
]