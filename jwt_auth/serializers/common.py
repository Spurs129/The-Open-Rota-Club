from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation 
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError

# User model
User = get_user_model()

# Serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    
    def validate(self, data):
        print('DATA ---->', data)
  
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        # Check the passwords match
        if password != password_confirmation:
            raise ValidationError({ 'password_confirmation': 'Does not match password' })

        try:
            password_validation.validate_password(password)
        except ValidationError as error:
            print(error)
            raise ValidationError({ 'password': error })

        # Hash password to put back on data
        data['password'] = make_password(password)
        print('HASHED PASSWORD --->', data['password'])
        return data

    # Define meta and fields to be serialized
    class Meta:
        model = User
        fields = '__all__'