from django.contrib.auth.models import AbstractUser
from django.db import models

# Custom user model extending default Django user
class User(AbstractUser):
    # Role field to differentiate admin and normal user
    role = models.CharField(
        max_length=10,
        choices=[('user', 'User'), ('admin', 'Admin')],
        default='user'
    )

    # This helps display user nicely in admin panel
    def __str__(self):
        return self.username