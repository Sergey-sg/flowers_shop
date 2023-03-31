from django.urls import path, include

from .views import ProductDetailAPIView, ProductsListAPIView, CategoryListAPIView

urlpatterns = [
    path('flowers/', include([
        path('', ProductsListAPIView.as_view(), name='product_list'),
        path('<slug:slug>/', ProductDetailAPIView.as_view(), name='product-detail'),
    ])),
    path('categories/', CategoryListAPIView.as_view(), name='categories_list'),
]
