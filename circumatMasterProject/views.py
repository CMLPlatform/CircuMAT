from django.shortcuts import render


def homePage(request):
    context_dict = {}

    return render(request, 'circumatMasterProject/home.html', context_dict)
