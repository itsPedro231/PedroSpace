from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt

import json
import os

here = os.path.dirname(os.path.abspath(__file__))
    
with open(os.path.join(here, 'profile.json')) as file:
    
    profile = json.load(file)

with open(os.path.join(here, 'experience.json')) as file:
    
    experience = json.load(file)
    
with open(os.path.join(here, 'projects.json')) as file:
    
    projects = json.load(file)
    
with open(os.path.join(here, 'contacts.json')) as file:
    
    contacts = json.load(file)
    
@csrf_exempt
@api_view(['GET'])
def get_profile(request):

    return Response(profile)

@csrf_exempt
@api_view(['GET'])
def get_experience(request):

    return Response(experience)

@csrf_exempt
@api_view(['GET'])
def get_projects(request):

    return Response(projects)

@csrf_exempt
@api_view(['GET'])
def get_contacts(request):

    return Response(contacts)