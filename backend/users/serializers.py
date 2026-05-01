from rest_framework import serializers
from .models import User

# Serializer converts model <-> JSON
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'role']

    def create(self, validated_data):
        """
        This method is called when creating a new user.
        create_user() ensures password is hashed properly.
        """
        return User.objects.create_user(**validated_data)