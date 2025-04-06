from django.shortcuts import render, get_object_or_404
from django.http import HttpRequest, HttpResponse, JsonResponse
from utils.badRequest import IsGetMethod
from .models import Company
from utils.serialize import *

# Create your views here.
def ListAllCompanies(request: HttpRequest) -> HttpResponse:
    error = IsGetMethod(request)
    if error:
        return error 

    companies = list(Company.objects.values())
    return JsonResponse(companies, safe=False)

def GetCompany(request: HttpRequest, id: int) -> HttpResponse:
    error = IsGetMethod(request)
    if error:
        return error

    if id <= 0:
        return JsonResponse({"error": "Incorrect id param"}, status=400)

    if not Company.objects.filter(id=id).exists():
        return JsonResponse({"error": "Company not found"}, status=404)

    company = Company.objects.get(id=id)
    return JsonResponse(SerializeCompanyObject(company))