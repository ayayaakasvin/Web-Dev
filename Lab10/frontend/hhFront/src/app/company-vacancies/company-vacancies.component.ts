import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../vacancy';
import { StorageService } from '../storage.service';
import { CommonModule } from '@angular/common';
import { Company } from '../company';
import { VacancyWindowComponent } from "../vacancy-window/vacancy-window.component";

@Component({
  selector: 'app-company-vacancies',
  imports: [CommonModule, VacancyWindowComponent],
  templateUrl: './company-vacancies.component.html',
  styleUrl: './company-vacancies.component.css'
})
export class CompanyVacanciesComponent implements OnInit {
  company: Company = {} as Company;
  vacancies: Vacancy[] = [];
  id: number = 0;

  constructor(private route: ActivatedRoute, private storage: StorageService) {
    this.id = this.route.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.storage.getCompanyVacancies(this.id).subscribe(
      (resp) => {
        this.vacancies = resp;
        if (resp.length > 0) {
          this.company = resp[0].company;
        }
      },
      (error) => {
        alert("not found")
      }
    )
  }
}
