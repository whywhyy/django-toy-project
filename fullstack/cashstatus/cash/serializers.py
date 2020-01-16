from rest_framework import serializers
from cash.models import Cash

# Cash Serializer
class CashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cash
        fields = '__all__'
