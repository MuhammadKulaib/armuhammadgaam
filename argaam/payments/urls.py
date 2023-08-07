from django.urls import path
from .views import *
urlpatterns = [
    # path('card/', CardView.as_view(), name="card"),
    path('card/', ListCreateCard.as_view(), name="card"),
]