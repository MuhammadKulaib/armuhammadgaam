from django.shortcuts import render
from .forms import CardForm
from .models import Card
from django.views import View
# Create your views here.
from .serializers import *
from rest_framework import permissions, status, generics


class ListCreateCard(generics.ListCreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class CardView(View):
    def get(self, request, *args, **kwargs):
        contex = {
            'form': CardForm
        }
        return render(request, 'create.html', contex)
    def post(self, request, *args, **kwargs):
        form = CardForm(request.POST)
        if form.is_valid():
            form.save()
        contex = {
            'form': form
        }
        return render(request, 'create.html', contex)