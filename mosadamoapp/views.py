from django.shortcuts import render
from django.http import HttpResponse
from .models import Image
from .models import Slider
from glob import glob

def index(request):
    context = {
        'images_list': Image.objects.all(),
        'slider_list': Slider.objects.all()
    }
    return render(request, 'index.html', context)

