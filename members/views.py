from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import status

# Model
from .models import Member

# Serializers
from .serializers.common import MemberSerializer
from .serializers.populated import PopulatedMemberSerializer

# Create your views here.

class MemberListView(APIView):

    # Get all artists
    def get(self, _request):
        members = Member.objects.all()
        serialized_members = PopulatedMemberSerializer(members, many=True)
        return Response(serialized_members.data, status=status.HTTP_200_OK)

