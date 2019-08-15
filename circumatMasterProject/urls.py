"""circumatMasterProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import circumatMasterProject.views as views
from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^$', views.home_page, name='homePage'),
    url(r'^online-tools/$', views.online_tools, name='onlineTools'),
    url(r'^online-databases/$', views.online_databases, name='onlineDatabases'),
    url(r'^project-summary/$', views.project_summary, name='projectSummary'),
    url(r'^circular-economy/$', views.circular_economy, name='circularEconomy'),
    url(r'^academic-papers/$', views.academic_papers, name='academicPapers'),
    url(r'^', include('circumat.urls')),
]
