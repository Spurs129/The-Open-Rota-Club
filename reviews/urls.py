from django.urls import path

# Views
from .views import ReviewListView, ReviewDetailView 

urlpatterns = [
    path('', ReviewListView.as_view()),
    path('<int:pk>/', ReviewDetailView.as_view()) 
]