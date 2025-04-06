from django.shortcuts import render, get_object_or_404
from django.http import HttpRequest, HttpResponse, JsonResponse
from utils.badRequest import IsGetMethod
from .models import Vacancy
from utils.serialize import *

# Create your views here.
def ListCompanyVacancies(request: HttpRequest, id: int) -> HttpResponse:
    error = IsGetMethod(request)
    if error:
        return error
    
    if id <= 0:
        return JsonResponse({"error": "Incorrect id param"}, status=400)
    
    if not Company.objects.filter(id=id).exists():
        return JsonResponse({"error": "Company not found"}, status=404)

    vacancies = Vacancy.objects.filter(company_id=id)
    if not vacancies.exists():
        return JsonResponse({"error": "No vacancy found"}, status=404)
    
    serialized = [SerializeVacancyObject(vacancy) for vacancy in vacancies]
    return JsonResponse(
        serialized, safe=False
    )

def ListAllVacancies(request: HttpRequest) -> HttpResponse:
    error = IsGetMethod(request)
    if error:
        return error
    
    vacancies = list(Vacancy.objects.values())
    return JsonResponse(vacancies, safe=False)

def GetVacancy(request: HttpRequest, id: int) -> HttpResponse:
    error = IsGetMethod(request)
    if error:
        return error
    
    if id <= 0:
        return JsonResponse({"error": "Incorrect id param"}, status=400)

    if not Vacancy.objects.filter(id=id).exists():
        return JsonResponse({"error": "Vacancy not found"}, status=404)

    vacancy = Vacancy.objects.get(id=id)
    return JsonResponse(SerializeVacancyObject(vacancy))

def GetTopTen(request: HttpRequest) -> HttpResponse:
    error = IsGetMethod(request)
    if error:
        return error
    
    top_vacancies = Vacancy.objects.order_by('-salary')[:10]
    serialized = [SerializeVacancyObject(vacancy) for vacancy in top_vacancies]

    return JsonResponse(serialized, safe=False)
