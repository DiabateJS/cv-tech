import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Competence } from './models/competence';
import { CompetenceFonctionnel } from './models/competence-fonctionnel';
import { Cv } from './models/cv';
import { CvResponse } from './models/cvresponse';
import { Experience } from './models/experience';
import { Formation } from './models/formation';
import { Langue } from './models/langue';
import { ReferenceCompetences } from './models/reference-competences';
import { Response } from './models/response';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  url_base: string;
  constructor(private http: HttpClient) {
    this.url_base = environment.urlBase; 
   }

  getCvs(): Observable<Response> {
    const url = this.url_base+"url=cvs/";
    return this.http.get<Response>(url);
  }

  getCvById(id: string): Observable<CvResponse> {
    const url = this.url_base+"url=cvs/"+id;
    return this.http.get<CvResponse>(url);
  }

  updateCv(idCv: string, cv: Cv): Observable<Response> {
    const url = this.url_base+"url=cvs/"+idCv;
    return this.http.put<Response>(url, cv);
  }

  getCvExperiences(idCv: string): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/experiences/";
    return this.http.get<Response>(url);
  }

  updateExperience(idCv: string, exp: Experience): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/experiences/"+exp.id;
    return this.http.put<Response>(url, exp);
  }

  createExperience(idCv: string, exp: Experience): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/experiences/";
    return this.http.post<Response>(url, exp);
  }

  deleteExperience(idCv: string, exp: Experience): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/experiences/"+exp.id;
    return this.http.delete<Response>(url);
  }

  getCvExperiencesFonctionnelles(idCv: string): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/competences_fonctionnelles/";
    return this.http.get<Response>(url);
  }

  createExperienceFonctionnelle(idCv: string, compFonctionnelle: CompetenceFonctionnel): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/competences_fonctionnelles/";
    return this.http.post<Response>(url, compFonctionnelle);
  }

  updateExperienceFonctionnelle(idCv: string, compFonctionnelle: CompetenceFonctionnel): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/competences_fonctionnelles/"+compFonctionnelle.id;
    return this.http.put<Response>(url, compFonctionnelle);
  }

  deleteExperienceFonctionnelle(idCv: string, compFonctionnelle: CompetenceFonctionnel): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/competences_fonctionnelles/"+compFonctionnelle.id;
    return this.http.delete<Response>(url);
  }


  getCvFormations(idCv: string): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/formations/";
    return this.http.get<Response>(url);
  }

  createFormation(idCv: string, formation: Formation): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/formations/";
    return this.http.post<Response>(url, formation);
  }

  deleteFormation(idCv: string, formation: Formation): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/formations/"+formation.id;
    return this.http.delete<Response>(url);
  }

  updateFormation(idCv: string, formation: Formation): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/formations/"+formation.id;
    return this.http.put<Response>(url, formation);
  }

  getCvLangues(idCv: string): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/langues/";
    return this.http.get<Response>(url);
  }

  createLangue(idCv: string, langue: Langue): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/langues/";
    return this.http.post<Response>(url, langue);
  }

  deleteLangue(idCv: string, langue: Langue): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/langues/"+langue.id;
    return this.http.delete<Response>(url);
  }

  updateLangue(idCv: string, langue: Langue): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/langues/"+langue.id;
    return this.http.put<Response>(url, langue);
  }

  getReferenceCompetences(): Observable<Response> {
    const url = this.url_base + "url=competences/";
    return this.http.get<Response>(url);
  }

}
