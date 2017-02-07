from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Image(models.Model):
    date_pub = models.DateTimeField('date published')
    url      = models.CharField(max_length=200)
    desc     = models.CharField(max_length=200)

