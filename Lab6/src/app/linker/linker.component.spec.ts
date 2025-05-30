import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkerComponent } from './linker.component';

describe('LinkerComponent', () => {
  let component: LinkerComponent;
  let fixture: ComponentFixture<LinkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
