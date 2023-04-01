from django_filters import rest_framework as filters

from .models import Product


class ProductFilter(filters.FilterSet):
    """filter for Product"""

    class Meta:
        model = Product
        fields = ('category__slug', 'name',)

    @staticmethod
    def filter_category(queryset, name, value):
        """get the filter value by category and return queryset of product"""
        for filter_value in value:
            queryset = Product.objects.filter(
                category__slug=filter_value, available=True)
        return queryset
