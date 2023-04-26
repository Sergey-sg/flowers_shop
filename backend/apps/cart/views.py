from typing import Dict, Any

from django.core.exceptions import ObjectDoesNotExist
from django.db.models import QuerySet, Sum
from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect, render, get_object_or_404
from django.views import View
from django.views.generic import CreateView, ListView
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework import status

from apps.cart.models import Cart, CartItem, Customer, Order
from .serializers import CartItemSerializer, CartSerializer
from ..flower.models import Product
from shared.mixins.views_mixins import get_cart_id
from shared.services.cart_services import cart_item_create_or_add_quantity, reduce_quantity_of_cart_item_or_delete, \
    cart_item_delete, moving_products_from_cart_to_order


class CartItemsListAPIView(generics.ListAPIView):
    """Get cart items in the session"""
    permission_classes = (AllowAny,)
    serializer_class = CartItemSerializer

    def get_queryset(self):
        return CartItem.objects.filter(cart__cart_id=get_cart_id(self.request))

    def get(self, request, *args, **kwargs):
        cart_items = self.get_queryset()
        total = cart_items.aggregate(Sum('sub_total'))['sub_total__sum']
        cart_items = [CartItemSerializer(item).data for item in cart_items]
        return JsonResponse({'items': cart_items, 'total': total})


class AddCartItemToCart(View):
    """Added cart item to cart"""
    def get(self, request, *args, **kwargs):
        product = get_object_or_404(Product, id=kwargs['pk'])
        cart_item = cart_item_create_or_add_quantity(product=product, request=request)
        cart_items = CartItem.objects.filter(cart__cart_id=get_cart_id(request))
        total = cart_items.aggregate(Sum('sub_total'))['sub_total__sum']
        return JsonResponse({'cartItem': CartItemSerializer(cart_item).data, 'total': total})


class CartItemReduceQuantityOrDelete(View):
    """Remove or delete cart item"""
    def get(self, request, *args, **kwargs):
        product = get_object_or_404(Product, id=kwargs['pk'])
        cart_item = reduce_quantity_of_cart_item_or_delete(product=product, request=request)
        cart_items = CartItem.objects.filter(cart__cart_id=get_cart_id(request)) 
        total = cart_items.aggregate(Sum('sub_total'))['sub_total__sum'] or 0 
        if type(cart_item) is CartItem:
            return JsonResponse({'cartItem': CartItemSerializer(cart_item).data, 'total': total})
        return JsonResponse({'cartItem': {'pk': cart_item, 'product': False}, 'total': total})


class CartItemDelete(View):
    """Delete cart item"""
    def get(self, request, *args, **kwargs):
        product = get_object_or_404(Product, id=kwargs['pk'])
        cart_item_delete(product=product, request=request)
        cart_items = CartItem.objects.filter(cart__cart_id=get_cart_id(request)) 
        total = cart_items.aggregate(Sum('sub_total'))['sub_total__sum'] or 0
        return JsonResponse({'cartItem': {'pk': kwargs['pk'], 'product': False}, 'total': total})


# class CreateCustomerOrderView(CreateView):
#     """displays the contents of the cart, creates a customer and saves the order"""
#     model = Customer
#     form_class = CustomerForm
#     template_name = 'cart/customer_order_form.jinja2'

#     def get_context_data(self, total=0, cart_items=0, **kwargs) -> Dict[str, Any]:
#         """inserts the total value of the cart and the items in the cart into context"""
#         context = super(CreateCustomerOrderView, self).get_context_data(**kwargs)
#         try:
#             cart = Cart.objects.get(cart_id=get_cart_id(self.request))
#             cart_items = CartItem.objects.filter(cart=cart, active=True)
#             if cart_items:
#                 total = cart_items.aggregate(Sum('sub_total'))['sub_total__sum']
#                 context['total'] = float(total)
#         except ObjectDoesNotExist:
#             pass
#         context['cart_items'] = cart_items
#         return context

#     def form_valid(self, form, *args, **kwargs) -> HttpResponse:
#         """saves the form and redirects to the successful order page"""
#         customer_form = form.save(commit=False)
#         try:
#             customer = Customer.objects.get(
#                 name=customer_form.name, email=customer_form.email,
#                 phone=customer_form.phone, address=customer_form.address
#             )
#         except Customer.DoesNotExist:
#             customer_form.save()
#             customer = customer_form
#         order_id = moving_products_from_cart_to_order(request=self.request, customer=customer)
#         return render(self.request, 'cart/successful_order.jinja2', context={'order': order_id})


class HistoryOrderListView(ListView):
    """
    Generates a list of orders filtered by email and phone
    """
    template_name = 'cart/history_orders.jinja2'

    def get_queryset(self) -> QuerySet[Order]:
        """return queryset with filter"""
        if 'email' and 'phone' in self.request.GET and self.request.GET['email'] and self.request.GET['phone']:
            return Order.objects.filter(customer__email=self.request.GET['email'],
                                        customer__phone=self.request.GET['phone'])
        elif 'email' in self.request.GET and self.request.GET['email']:
            return Order.objects.filter(customer__email=self.request.GET['email'])
        elif 'phone' in self.request.GET and self.request.GET['phone']:
            return Order.objects.filter(customer__phone=self.request.GET['phone'])