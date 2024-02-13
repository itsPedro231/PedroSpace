from django.urls import path
from . import views

app_name = "prof"

urlpatterns = [
    path("prof", views.get_profile),
    path("exp", views.get_experience),
    path("proj", views.get_projects),
    path("contacts", views.get_contacts)
]