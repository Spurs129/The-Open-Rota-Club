from .common import MemberSerializer
from venues.serializers.common import VenueSerializer

# Serializers
class PopulatedMemberSerializer(MemberSerializer):
    venues = VenueSerializer(many=True)