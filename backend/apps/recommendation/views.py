from rest_framework import generics
from rest_framework.permissions import AllowAny

from .serializers import RecommendationSerializer
from .models import Recommendation


class RecommendationListAPIView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Recommendation.objects.filter(active=True)
    serializer_class = RecommendationSerializer
