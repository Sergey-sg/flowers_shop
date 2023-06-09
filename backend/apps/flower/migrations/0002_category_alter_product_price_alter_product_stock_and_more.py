# Generated by Django 4.1.7 on 2023-03-31 07:09

import django.core.validators
from django.db import migrations, models
import shared.mixins.model_utils


class Migration(migrations.Migration):

    dependencies = [
        ('flower', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(help_text='category name', max_length=200, unique=True, validators=[django.core.validators.MinLengthValidator(3)], verbose_name='name')),
                ('slug', models.SlugField(blank=True, help_text='used to generate URL', unique=True)),
            ],
            options={
                'verbose_name': 'category',
                'verbose_name_plural': 'Categories',
                'ordering': ['-created'],
            },
            bases=(models.Model, shared.mixins.model_utils.SlugImageSaveMixin),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.PositiveIntegerField(help_text='the price of the product in coins', max_length=10, verbose_name='price'),
        ),
        migrations.AlterField(
            model_name='product',
            name='stock',
            field=models.PositiveIntegerField(blank=True, help_text='product quantity in stock', null=True, verbose_name='stock'),
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ManyToManyField(help_text='categories for product', to='flower.category', verbose_name='category'),
        ),
    ]
