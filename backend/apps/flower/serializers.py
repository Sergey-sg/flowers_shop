from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('pk', 'slug', 'name',)


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Product
        # lookup_field = 'slug'
        fields = ('pk', 'slug', 'category', 'name', 'description',
                  'price', 'image', 'img_alt', 'stock', 'available',)
        # extra_kwargs = {
        #     'url': {'lookup_field': 'slug'}
        # }
