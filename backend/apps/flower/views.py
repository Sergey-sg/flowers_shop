from rest_framework import generics
from rest_framework.permissions import AllowAny

from .serializers import ProductSerializer, CategorySerializer
from .filters import ProductFilter
from .models import Product, Category


class CategoryListAPIView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductsListAPIView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter


class ProductDetailAPIView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'
