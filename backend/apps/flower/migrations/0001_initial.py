# Generated by Django 4.1.7 on 2023-03-30 05:06

import django.core.validators
from django.db import migrations, models
import shared.mixins.model_utils


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(help_text='product name', max_length=250, validators=[django.core.validators.MinLengthValidator(3)], verbose_name='name')),
                ('slug', models.SlugField(blank=True, help_text='used to generate URL', unique=True)),
                ('description', models.TextField(blank=True, help_text='product description', verbose_name='description')),
                ('price', models.DecimalField(decimal_places=2, help_text='the price of the product', max_digits=10, verbose_name='price')),
                ('image', models.ImageField(blank=True, help_text='product image', null=True, upload_to='product/%Y/%m/%d', verbose_name='image')),
                ('img_alt', models.CharField(blank=True, help_text='text to be loaded in case of image loss', max_length=150, null=True, verbose_name='image alternative')),
                ('stock', models.IntegerField(blank=True, help_text='product quantity in stock', null=True, verbose_name='stock')),
                ('available', models.BooleanField(default=True, help_text='available product or not', verbose_name='available')),
            ],
            options={
                'verbose_name': 'product',
                'verbose_name_plural': 'Products',
                'ordering': ['-created'],
            },
            bases=(models.Model, shared.mixins.model_utils.ImageNameMixins, shared.mixins.model_utils.SlugImageSaveMixin),
        ),
    ]