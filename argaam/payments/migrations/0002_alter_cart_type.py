# Generated by Django 4.2.4 on 2023-08-04 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payments', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='type',
            field=models.CharField(choices=[('mastercard', 'mastercard'), ('visa', 'Visa'), ('mada', 'مدى')], max_length=100),
        ),
    ]
