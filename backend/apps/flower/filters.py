from django_filters import rest_framework as filters

from .models import Product


class ProductFilter(filters.FilterSet):
    """filter for Product"""
    ordering = filters.OrderingFilter(
        fields=(('price', 'price'), ('number_of_sold', 'sold'), ),)
    search = filters.CharFilter(field_name='name', lookup_expr='icontains')
    category = filters.BaseInFilter(method='filter_category')

    def filter_category(self, queryset, *args):
        """get the filter value by category and return queryset of product"""
        categories = self.request.GET.getlist('category')
        for category in categories:
            queryset = queryset.filter(category__slug=category)
        return queryset
