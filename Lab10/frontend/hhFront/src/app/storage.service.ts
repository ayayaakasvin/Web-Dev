import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Company } from './company';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private apiUrl: string = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`)
    .pipe(
      catchError((error) => {
        console.error('Error fetching companies:', error);
        return of([]);
      })
    )
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}/companies/${id}/vacancies/`)
    .pipe(
      catchError((error) => {
        console.error('Error fetching companies:', error);
        return of([]);
      })
    )
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}/vacancies/${id}`)
    .pipe(
      catchError((error) => {
        console.error('Error fetching companies:', error);
        return of({} as Vacancy);
      })
    )
  }

  getTopTen(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}/vacancies/top_ten/`)
    .pipe(
      catchError((error) => {
        console.error('Error fetching companies:', error);
        return of([]);
      })
    )
  }
}