from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Image(models.Model):
    date_pub = models.DateTimeField('date published')
    url      = models.ImageField(upload_to='static/images/gallery/', default='static/images/gallery/')
    desc     = models.CharField(max_length=200)
    title    = models.CharField(max_length=200)

