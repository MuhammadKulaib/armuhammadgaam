from django.contrib import admin
from .models import Card
from .forms import CardForm
# Register your models here.

class CardAdmin(admin.ModelAdmin):
    list_display = ['name', 'country', 'type', 'expiration_date', 'number', 'CVV']
    search_fields = ['name', 'number']
    list_filter = ['type', 'country']
    list_per_page = 10
    # form = CardForm
    

admin.site.register(Card, CardAdmin)