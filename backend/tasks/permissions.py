from rest_framework.permissions import BasePermission

# Custom permission
class IsAdminOrOwner(BasePermission):
    """
    - Admin can access everything
    - User can access only their own tasks
    """
    def has_object_permission(self, request, view, obj):
        return request.user.role == 'admin' or obj.user == request.user