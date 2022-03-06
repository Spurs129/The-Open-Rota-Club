from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from django.db import IntegrityError

#models
from.models import Venue
from .serializers.common import VenueSerializer
from .serializers.populated import PopulatedVenueSerializer

from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.

class VenueListView(APIView):
  permission_classes = (IsAuthenticatedOrReadOnly,)
  
  def get(self, _request):
    venues = Venue.objects.all()
    serialized_venues = VenueSerializer(venues, many=True)
    print(serialized_venues)
    print(venues)
    return Response(serialized_venues.data, status=status.HTTP_200_OK)

  def post(self, request):

        serialized_data = VenueSerializer(data=request.data)
    
        try:
            serialized_data.is_valid()
            serialized_data.save()
            
            print(serialized_data.data)
            return Response(serialized_data.data, status=status.HTTP_201_CREATED)
        
        except IntegrityError as e:
            return Response({ "detail": str(e) }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
            
        
        except AssertionError as e:
            return Response({ "detail": str(e) }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        
        except:
            return Response(
                { "detail": "Unprocessable Entity" },
                status=status.HTTP_422_UNPROCESSABLE_ENTITY
            )

class VenueDetailView(APIView):

 
    def get_venue(self, pk):
        try:
            return Venue.objects.get(pk=pk)
        except Venue.DoesNotExist:
            raise NotFound(detail="Venue not found")

    def get(self, _request, pk):
        venue = self.get_venue(pk)
        serialized_venue = PopulatedVenueSerializer(venue)
        return Response(serialized_venue.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        venue = self.get_venue(pk=pk)
        venue.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        venue_to_update = self.get_venue(pk=pk)
        serialized_venue = VenueSerializer(venue_to_update, data=request.data)
        try:
            serialized_venue.is_valid()
            serialized_venue.save()
            return Response(serialized_venue.data, status=status.HTTP_202_ACCEPTED)
        except AssertionError as e:
            return Response({ "detail": str(e) }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response("Unprocessable Entity", status=status.HTTP_422_UNPROCESSABLE_ENTITY)