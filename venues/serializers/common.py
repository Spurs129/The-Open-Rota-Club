from rest_framework import serializers
from ..models import Venue

class VenueSerializer(serializers.ModelSerializer):
  class Meta:  # nested class called meta. we define what model to use and which fields to serialize.
    model = Venue
    fields = '__all__' # this will return all fields.  We use tuple if we want to specifiy certain fields
