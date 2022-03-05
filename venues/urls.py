from django.urls import path
from .views import VenueDetailView, VenueListView

urlpatterns = [
  path('', VenueListView.as_view()),
  path('<int:pk>/', VenueDetailView.as_view())
]