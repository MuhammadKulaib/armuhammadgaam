import re
from django.db import models
from month.models import MonthField
from django.core.validators import RegexValidator
# Create your models here.

class Card(models.Model):
    CARD_TYPES = [
        ('mastercard', 'mastercard'),
        ('visa', 'Visa'),
        ('mada', 'مدى'),
    ]
    country = models.CharField(max_length=50, verbose_name='اسم الدولة')
    name = models.CharField(max_length=100,
                            validators=[RegexValidator(
                                re.compile(r'^[A-Za-zأ-ي]+\s[A-Za-zأ-ي]+$'),
                                'أدخل اسمًا صالحًا يحتوي على كلمتين على الأقل (بدون رموز أو أرقام).'
                            )],
                            verbose_name='اسم حامل البطاقة')
    number = models.DecimalField(max_length=20, max_digits=20, decimal_places=0,
                                 verbose_name='رقم البطاقة')
    type = models.CharField(max_length=100, choices=CARD_TYPES, verbose_name='نوع البطاقة')
    expiration_date = MonthField(verbose_name='تاريخ الانتهاء', error_messages={
        'invalid': 'صيغة التاريخ غير صحيحة.'
    })
    # expiration_date = models.DateField(verbose_name='تاريخ الانتهاء')
    CVV = models.DecimalField(max_length=4, max_digits=4, decimal_places=0,
                              verbose_name='(CVV) رمز التحقق')


    def __str__(self):
        return self.name

    # class Meta:
    #     verbose_name = 'البطاقة'