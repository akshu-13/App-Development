from django.urls import path
from .views import CustomerSignupView, CustomerSigninView, CustomerSignoutView

urlpatterns = [
    path('signup/', CustomerSignupView.as_view(), name='customer-signup'),
    path('signin/', CustomerSigninView.as_view(), name='customer-signin'),
    path('signout/', CustomerSignoutView.as_view(), name='customer-signout'),
]
