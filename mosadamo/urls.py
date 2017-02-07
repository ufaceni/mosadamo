from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^mosadamoapp/', include('mosadamoapp.urls', namespace='mosadamoapp')),
    url(r'^admin/', admin.site.urls),
]
