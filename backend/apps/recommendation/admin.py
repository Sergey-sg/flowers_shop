from django.contrib import admin

from .models import Recommendation


class ProductAdmin(admin.TabularInline):
    model = Recommendation.product.through


@admin.register(Recommendation)
class RecommendationAdmin(admin.ModelAdmin):
    list_display = ('name', 'active',)
    fields = ('name', 'active')
    search_fields = ('name',)
    list_filter = ['created']
    ordering = ('active', '-updated')
    inlines = (ProductAdmin,)
