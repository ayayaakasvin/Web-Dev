from django.db import models
from Company.models import *

# Create your models here.
class Vacancy (models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancies")

    def __str__(self):
        return self.name