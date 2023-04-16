from rest_framework import serializers

from ..flower.models import Product
from .models import Cart, CartItem


class ProductForCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('pk', 'slug', 'name', 'image', 'img_alt',)


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductForCartSerializer()
    
    class Meta:
        model = CartItem
        fields = ('pk', 'product', 'quantity', 'active', 'sub_total',)


class CartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cart
        fields = ('pk', 'cart_id',)
