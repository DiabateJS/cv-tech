import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartesCvComponent } from './cartes-cv.component';

describe('CartesCvComponent', () => {
  let component: CartesCvComponent;
  let fixture: ComponentFixture<CartesCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartesCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartesCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
