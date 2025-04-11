import { Component, Input } from '@angular/core';
import { Vacancy } from '../vacancy';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy-window',
  imports: [RouterLink, CommonModule],
  templateUrl: './vacancy-window.component.html',
  styleUrl: './vacancy-window.component.css'
})
export class VacancyWindowComponent {
  @Input() vacancy!: Vacancy;
}
