from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#models
from.models import Venue
from .serializers import VenueSerializer


# Create your views here.

class VenueListView(APIView):
  def get(self, _request):
    venues = Venue.objects.all()
    serialized_venues = VenueSerializer(venues, many=True)
    print(serialized_venues)
    print(venues)
    return Response(serialized_venues.data, status=status.HTTP_200_OK)
