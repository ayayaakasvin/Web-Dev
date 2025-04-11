import { Component, OnInit } from '@angular/core';
import { CompaniesComponent } from "../companies/companies.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Company } from '../company';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-main-outlet',
  imports: [CompaniesComponent, CommonModule, RouterModule],
  templateUrl: './main-outlet.component.html',
  styleUrl: './main-outlet.component.css'
})
export class MainOutletComponent implements OnInit {
  companies: Company[] = [];

  constructor(private storage: StorageService) {
    
  }
  ngOnInit(): void {
    this.storage.getCompanies().subscribe(
      (resp) => {
        this.companies = resp;
      },
      (error) => {
        alert("not found");
      }
    )
  }
}
