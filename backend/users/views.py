from rest_framework import generics
from .serializers import RegisterSerializer

# API to register new users
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer