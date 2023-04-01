from rest_framework import serializers

from ..flower.serializers import ProductSerializer
from .models import Recommendation


class RecommendationSerializer(serializers.ModelSerializer):
    product = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Recommendation
        fields = ('pk', 'name', 'product')
