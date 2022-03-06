from rest_framework.authentication import BasicAuthentication # Django's default authentication - we'll extend this
from rest_framework.exceptions import PermissionDenied # exception when user isn't auth'd
from django.contrib.auth import get_user_model # importing this to get the active User model
from django.conf import settings # imports settings that also includes secret key
import jwt # import jwt

# User model
User = get_user_model()

# Custom Authentication class

class JWTAuthentication(BasicAuthentication):
    
    def authenticate(self, request):
        header = request.headers.get('Authorization')

        # If header doesn't contain information we want to throw an error
        if not header:
            return None
        
        # Checking the token begins with Bearer
        if not header.startswith('Bearer'):
            raise PermissionDenied(detail="Invalid Token Format")

        # remove Bearer from the beginning of the token
        token = header.replace('Bearer ', '')

       
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))

        except jwt.exceptions.InvalidTokenError as error:
            print(error)
            raise PermissionDenied(detail="Invalid Token")

        except User.DoesNotExist as error:
            print(error)
            raise PermissionDenied(detail="User Does Not Exist")
        
        return (user, token) 
