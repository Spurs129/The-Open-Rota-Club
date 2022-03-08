from rest_framework.views import APIView # APIView - default view class to extend
from django.contrib.auth import get_user_model # get_user_model returns active User model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from .serializers.common import UserSerializer
from datetime import datetime, timedelta 
import jwt
from django.conf import settings

# User model
User = get_user_model()

# Create your views here.
class RegisterView(APIView):

    def post(self, request):
        print("hello")
        user_to_create = UserSerializer(data=request.data)
        try:
            user_to_create.is_valid()
            user_to_create.save()
            return Response(user_to_create.data, status=status.HTTP_201_CREATED)
        except: 
            return Response("Failed to create user", status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class LoginView(APIView):

    def post(self, request):
        print(request.data)
        try:
            user_to_login = User.objects.get(email=request.data.get('email'))
        except User.DoesNotExist:
            return PermissionDenied(detail="Unauthorised")
        
        if not user_to_login.check_password(request.data.get('password')):
            return PermissionDenied(detail="Unauthorised")

        dt = datetime.now() + timedelta(days=7) 
        print('DT ----->', int(dt.strftime('%s'))) 

        token = jwt.encode({
            'sub': user_to_login.id,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, 'HS256')
        print('TOKEN ----->', token)

        return Response({
            'token': token,
            'message': f"Welcome back {user_to_login.username}"
        }, status.HTTP_202_ACCEPTED)