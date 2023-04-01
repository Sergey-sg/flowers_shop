from django.core.validators import MinLengthValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from ..flower.models import Product
from shared.mixins.model_utils import CreatedUpdateMixins


class Recommendation(CreatedUpdateMixins):
    """
    Recommendation model
    attributes:
        name (str): name of recommendation
        active (bool): active recommendation or not
        product (class Product): communication with the Product model
        created (datetime): data of create recommendation
        updated (datetime): data of update recommendation
    """
    name = models.CharField(
        max_length=250,
        validators=[MinLengthValidator(3)],
        verbose_name=_('name'),
        help_text=_('name of recommendation')
    )
    active = models.BooleanField(
        verbose_name=_('active'),
        help_text=_('active recommendation or not'),
        default=True
    )
    product = models.ManyToManyField(
        Product,
        verbose_name=_('product'),
        help_text=_('products in the recommendation')
    )

    class Meta(object):
        verbose_name = _('recommendation')
        verbose_name_plural = _('Recommendations')
        ordering = ['-created']

    def __str__(self) -> str:
        """class method returns the recommendation in string representation"""
        return self.name
