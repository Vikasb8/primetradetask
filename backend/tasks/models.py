from django.db import models
from django.conf import settings

# Task model (CRUD entity)
class Task(models.Model):
    title = models.CharField(max_length=100)  # task title
    description = models.TextField()          # task description

    # Link task to logged-in user
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title