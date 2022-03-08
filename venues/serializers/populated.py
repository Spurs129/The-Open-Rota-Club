from .common import VenueSerializer 
from reviews.serializers.common import ReviewSerializer 
#from members.serializers.common import MemberSerializer

# Serializers
class PopulatedVenueSerializer(VenueSerializer):
    reviews = ReviewSerializer(many=True) 
    #members = MemberSerializer(many=True)