from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework.exceptions import NotFound 
from rest_framework import status 

# Exceptions
from django.db import IntegrityError

# Serializers
from .serializers.common import ReviewSerializer 

# Models
from .models import Review 

# Create your views here.
class ReviewListView(APIView):

    # Add review
    def post(self, request):
        print(request.data)
        serialized_review = ReviewSerializer(data=request.data)
        try:
            serialized_review.is_valid()
            serialized_review.save()
            print(serialized_review.data)
            return Response(serialized_review.data, status=status.HTTP_201_CREATED)
        except AssertionError as e:
            print(str(e))
            return Response({
                "detail": str(e) 
            }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response({
                "detail": "Unprocessable Entity"
            }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

# Detailed / Single view
class ReviewDetailView(APIView):

    # /festivals/<int:pk>/reviews/<int:reviewId>/ - NoSQL endpoint (embedded relationship)
    # /reviews/<int:pk>/ - SQL endpoint 
    def delete(self, _request, pk):
        try:
            review_to_delete = Review.objects.get(pk=pk)
            review_to_delete.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Review.DoesNotExist:
            raise NotFound(detail="Review not found")
        except:
            return Response({
                "detail": "Failed to delete Review"
            }, status=status.HTTP_401_UNAUTHORIZED)
