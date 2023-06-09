# Generated by Django 4.2 on 2023-04-16 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='quantity',
            field=models.PositiveIntegerField(help_text='the quantity of the product in the cart item', verbose_name='quantity'),
        ),
        migrations.AlterField(
            model_name='cartitem',
            name='sub_total',
            field=models.PositiveIntegerField(help_text='the total price in coins of the products in cart item', verbose_name='total price'),
        ),
        migrations.AlterField(
            model_name='order',
            name='total_price',
            field=models.PositiveIntegerField(help_text='total price of order in coins', verbose_name='total price'),
        ),
    ]
