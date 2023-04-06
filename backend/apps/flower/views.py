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

    def get_queryset(self):
        qs = super(ProductsListAPIView, self).get_queryset()
        if 'category' in self.request.GET and self.request.GET['category']:
            categories = self.request.GET.getlist('category')
            for category in categories:
                qs = qs.filter(category__slug=category)
        return qs


class ProductDetailAPIView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'
