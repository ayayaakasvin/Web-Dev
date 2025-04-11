import { Routes } from '@angular/router';
import { MainOutletComponent } from './main-outlet/main-outlet.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { TopTenComponent } from './top-ten/top-ten.component';

export const routes: Routes = [
    {
        path: "companies",
        component: MainOutletComponent,
        title: "Companies"
    },
    {
        path: "companies/:id",
        component: CompanyVacanciesComponent,
        title: "Company"
    },
    {
        path: "vacancy/:id",
        component: VacancyDetailComponent,
        title: "Vacancy"
    },
    {
        path: "top-ten",
        component: TopTenComponent,
        title: "Top Ten"
    },
    {
        path: "**",
        redirectTo: "companies"
    }
];
