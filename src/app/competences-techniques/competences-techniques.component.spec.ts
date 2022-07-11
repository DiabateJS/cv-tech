import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesTechniquesComponent } from './competences-techniques.component';

describe('CompetencesTechniquesComponent', () => {
  let component: CompetencesTechniquesComponent;
  let fixture: ComponentFixture<CompetencesTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencesTechniquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencesTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
