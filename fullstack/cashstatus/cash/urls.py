from rest_framework import routers
from .api import CashViewset

routers = routers.DefaultRouter()
routers.register('api/cash',CashViewset,'cash')

urlpatterns = routers.urls
