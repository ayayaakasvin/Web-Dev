import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../vacancy';
import { StorageService } from '../storage.service';
import { error } from 'console';
import { VacancyWindowComponent } from "../vacancy-window/vacancy-window.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-ten',
  imports: [VacancyWindowComponent, CommonModule],
  templateUrl: './top-ten.component.html',
  styleUrl: './top-ten.component.css'
})
export class TopTenComponent implements OnInit {
  vacancies!: Vacancy[];

  constructor(private storage: StorageService) {
    
  }

  ngOnInit(): void {
    this.storage.getTopTen().subscribe(
      (resp) => {
        this.vacancies = resp;
      },
      (error) => {
        alert("not found")
      }
    )
  }
}
