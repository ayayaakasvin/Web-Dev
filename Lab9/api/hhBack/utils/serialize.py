from Company.models import *
from Vacancy.models import *

def SerializeCompanyObject(Company: Company) -> dict | None:
    if not Company:
        return None
    
    return {
        "id": Company.id,
        "name": Company.name,
        "description": Company.description,
        "city": Company.city,
        "address": Company.address,
    }

def SerializeVacancyObject(Vacancy: Vacancy) -> dict | None:
    if not Vacancy:
        return None
    
    return {
        "id": Vacancy.id,
        "name": Vacancy.name,
        "description": Vacancy.description,
        "salary": Vacancy.salary,
        "company": SerializeCompanyObject(Vacancy.company),
    }