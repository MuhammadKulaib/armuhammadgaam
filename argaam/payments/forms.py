import re
from django import forms
from django.core.validators import RegexValidator


from .models import Card

class CardForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['number'].min_length = 15
        self.fields['name'].validators = [RegexValidator(
                re.compile(r'^[A-Za-zأ-ي]+\s[A-Za-zأ-ي]+$'),
                'أدخل اسمًا صالحًا يحتوي على كلمتين على الأقل (بدون رموز أو أرقام).'
            )]

    class Meta:
        model = Card
        fields = '__all__'
        widgets = {
            "number": forms.TextInput(attrs={'placeholder': 'رقم البطاقة'}),
            "name": forms.TextInput(attrs={'placeholder': 'اسم حامل البطاقة'}),
            "CVV": forms.TextInput(attrs={'placeholder': '(CVV) رمز التحقق'}),
        }
