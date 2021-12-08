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


def project_summary(request):
    context_dict = {}
    return render(request, 'circumatMasterProject/project-summary.html', context_dict)


def circular_economy(request):
    context_dict = {}
    return render(request, 'circumatMasterProject/circular-economy.html', context_dict)


def academic_papers(request):
    context_dict = {}
    return render(request, 'circumatMasterProject/academic-papers.html', context_dict)
