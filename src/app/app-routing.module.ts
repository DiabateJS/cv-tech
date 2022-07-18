import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvTechComponent } from './cv-tech/cv-tech.component';
import { CartesCvComponent } from './cartes-cv/cartes-cv.component';
import { CvTechIntroComponent } from './cv-tech-intro/cv-tech-intro.component';

const routes: Routes = [
  {path:'home', component: CvTechIntroComponent},
  {path:'cv-tech/cv', component: CvTechComponent},
  {path:'cv-tech/cv/:id', component: CvTechComponent},
  {path:'cv-tech/cvs', component: CartesCvComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component: CvTechIntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

