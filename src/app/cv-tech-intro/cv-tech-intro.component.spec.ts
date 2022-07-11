import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTechIntroComponent } from './cv-tech-intro.component';

describe('CvTechIntroComponent', () => {
  let component: CvTechIntroComponent;
  let fixture: ComponentFixture<CvTechIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvTechIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTechIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
