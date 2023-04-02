# Generated by Django 4.1.7 on 2023-04-02 10:22

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flower', '0004_product_number_of_sold'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(blank=True, help_text='product description', validators=[django.core.validators.MinLengthValidator(100)], verbose_name='description'),
        ),
    ]
