from django.db import models
from django.contrib.auth.models import User

class Cash(models.Model):
    base_nation = models.CharField(max_length=50)
    target_nation = models.CharField(max_length=50)
    Data_date = models.DateField()
    rate = models.FloatField()
    owner = models.ForeignKey(User, related_name="cash", on_delete=models.CASCADE,null=True)
    created_date = models.DateTimeField(auto_now_add=True)

    