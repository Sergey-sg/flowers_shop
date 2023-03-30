from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class FlowerConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.flower'
    verbose_name = _('Flower')
