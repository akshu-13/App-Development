from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from .models import User
from .serializers import UserSerializer
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

class CustomerSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @swagger_auto_schema(
        operation_description="Register a new customer",
        request_body=UserSerializer,
        responses={
            201: openapi.Response('Customer created successfully', UserSerializer),
            400: 'Bad Request'
        },
        tags=['Customer']
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

    
class CustomerSigninView(APIView):
    @swagger_auto_schema(
        operation_description="Sign in a customer",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'email': openapi.Schema(type=openapi.TYPE_STRING, description='Email'),
                'password': openapi.Schema(type=openapi.TYPE_STRING, description='Password'),
            },
            required=['email', 'password']
        ),
        responses={
            200: 'Login successful',
            401: 'Invalid credentials'
        },
        tags=['Customer']
    )
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class CustomerSignoutView(APIView):
    @swagger_auto_schema(
        operation_description="Sign out a customer",
        responses={
            200: 'Logout successful',
        },
        tags=['Customer']
    )
    def post(self, request):
        logout(request)
        return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
