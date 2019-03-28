from django.conf.urls import url
from django.urls import path
import circumat.views as views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    # url(r'^$', views.ExioVisuals, name='ExioVisuals'),
    path('circumat/', views.home, name='home'),
    path('ajaxhandling/', views.ajaxHandling, name='ajaxhandling'),

]
