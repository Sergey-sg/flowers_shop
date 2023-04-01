from django.contrib import admin

from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug',)
    search_fields = ('name',)
    list_filter = ['created']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'price', 'stock',
                    'number_of_sold', 'available')
    readonly_fields = ('number_of_sold',)
    search_fields = ('name',)
    list_filter = ('created', 'available',)
    ordering = ('-created', 'number_of_sold',)
