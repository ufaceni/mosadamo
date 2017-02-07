from django.shortcuts import render
from django.http import HttpResponse
from .models import Image
from glob import glob

def index(request):
    context = {
        'images_list': Image.objects.all()
    }
    return render(request, 'index.html', context)

