from django.shortcuts import render


def home_page(request):
    context_dict = {}
    return render(request, 'circumatMasterProject/home.html', context_dict)

def online_tools(request):
    context_dict = {}
    return render(request, 'circumatMasterProject/online-tools.html', context_dict)

def online_databases(request):
    context_dict = {}
    return render(request, 'circumatMasterProject/online-databases.html', context_dict)
