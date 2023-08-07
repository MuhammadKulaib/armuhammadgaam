# Generated by Django 4.2.4 on 2023-08-05 16:25

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payments', '0006_alter_card_expiration_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='number',
            field=models.CharField(max_length=20, validators=[django.core.validators.RegexValidator(code='invalid_number', message='تنسيق الرقم غير صالح. يُسمح فقط بالأرقام.', regex='^\\d+$'), django.core.validators.MinLengthValidator(10)], verbose_name='رقم البطاقة'),
        ),
    ]
