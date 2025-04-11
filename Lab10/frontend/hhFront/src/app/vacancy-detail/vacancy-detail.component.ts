import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from '../vacancy';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { error } from 'console';

@Component({
  selector: 'app-vacancy-detail',
  imports: [],
  templateUrl: './vacancy-detail.component.html',
  styleUrl: './vacancy-detail.component.css'
})
export class VacancyDetailComponent implements OnInit {
  vacancy: Vacancy = {} as Vacancy;
  id: number = 0;

  constructor(private route: ActivatedRoute, private storage: StorageService) {
    this.id = route.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.storage.getVacancy(this.id).subscribe(
      (vacancy) => {
        this.vacancy = vacancy;
      },
      (error) => {
        alert("not found")
      }
    )
  }

  onClick() {
    alert("Applied!")
  }
}
