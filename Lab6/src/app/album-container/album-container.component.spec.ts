import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumContainerComponent } from './album-container.component';

describe('AlbumContainerComponent', () => {
  let component: AlbumContainerComponent;
  let fixture: ComponentFixture<AlbumContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
