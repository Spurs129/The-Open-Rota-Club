from django.urls import path
from .views import MemberListView

# Patterns
urlpatterns = [
    path('', MemberListView.as_view()) 
]