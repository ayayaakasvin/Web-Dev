import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyWindowComponent } from './vacancy-window.component';

describe('VacancyWindowComponent', () => {
  let component: VacancyWindowComponent;
  let fixture: ComponentFixture<VacancyWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
