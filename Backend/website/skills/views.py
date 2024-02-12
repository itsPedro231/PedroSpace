from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt

import json
import os

here = os.path.dirname(os.path.abspath(__file__))
    
with open(os.path.join(here, 'skills.json')) as file:
    
    skills = json.load(file)
    
@csrf_exempt
@api_view(['GET'])
def get_skills(request):

    return Response(skills)