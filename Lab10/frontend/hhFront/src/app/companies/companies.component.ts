import { Component, Input } from '@angular/core';
import { Company } from '../company';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-companies',
  imports: [RouterLink, CommonModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  @Input() company!: Company;

  constructor() {
    
  }
}
