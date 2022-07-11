import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesFonctionnellesComponent } from './competences-fonctionnelles.component';

describe('CompetencesFonctionnellesComponent', () => {
  let component: CompetencesFonctionnellesComponent;
  let fixture: ComponentFixture<CompetencesFonctionnellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencesFonctionnellesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencesFonctionnellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
