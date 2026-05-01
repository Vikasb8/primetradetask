from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAdminOrOwner

class TaskViewSet(viewsets.ModelViewSet):
    """
    ModelViewSet automatically provides:
    - GET (list)
    - POST (create)
    - PUT (update)
    - DELETE (delete)
    """

    serializer_class = TaskSerializer

    # Only logged-in users can access
    permission_classes = [IsAuthenticated, IsAdminOrOwner]

    def get_queryset(self):
        """
        Controls what data user can see
        """
        user = self.request.user

        # Admin sees all tasks
        if user.role == 'admin':
            return Task.objects.all()

        # Normal user sees only their tasks
        return Task.objects.filter(user=user)

    def perform_create(self, serializer):
        """
        Automatically assign logged-in user when creating task
        """
        serializer.save(user=self.request.user)