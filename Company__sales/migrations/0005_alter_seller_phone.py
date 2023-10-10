# Generated by Django 4.2.6 on 2023-10-10 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company__sales', '0004_alter_customer_phone_alter_seller_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seller',
            name='phone',
            field=models.CharField(help_text='Enter phone', max_length=12, unique=True, verbose_name='Seller phone'),
        ),
    ]
