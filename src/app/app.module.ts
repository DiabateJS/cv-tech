import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvTechComponent } from './cv-tech/cv-tech.component';
import { CvTechIntroComponent } from './cv-tech-intro/cv-tech-intro.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperiencesProComponent } from './experiences-pro/experiences-pro.component';
import { FormationsComponent } from './formations/formations.component';
import { InfoComponent } from './info/info.component';
import { LanguesComponent } from './langues/langues.component';
import { CartesCvComponent } from './cartes-cv/cartes-cv.component';
import { CompetencesTechniquesComponent } from './competences-techniques/competences-techniques.component';
import { CompetencesFonctionnellesComponent } from './competences-fonctionnelles/competences-fonctionnelles.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CvTechComponent,
    CvTechIntroComponent,
    EntrepriseComponent,
    ExperiencesComponent,
    ExperiencesProComponent,
    FormationsComponent,
    InfoComponent,
    LanguesComponent,
    CartesCvComponent,
    CompetencesTechniquesComponent,
    CompetencesFonctionnellesComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
