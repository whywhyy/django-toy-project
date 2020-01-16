from cash.models import Cash
from rest_framework import viewsets, permissions
from .serializers import CashSerializer

# Cash Viewset
class CashViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = CashSerializer
    
    def get_queryset(self):
        return self.request.user.cash.all()

    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)