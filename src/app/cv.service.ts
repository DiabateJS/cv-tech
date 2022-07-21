import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competence } from './models/competence';
import { CvResponse } from './models/cvresponse';
import { ReferenceCompetences } from './models/reference-competences';
import { Response } from './models/response';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  url_base: string;
  constructor(private http: HttpClient) {
    this.url_base = "http://localhost:8888/ws-wconsulting/index.php?"; 
   }

  getCvs(): Observable<Response> {
    const url = this.url_base+"url=cvs/";
    return this.http.get<Response>(url);
  }

  getCvById(id: string): Observable<CvResponse> {
    const url = this.url_base+"url=cvs/"+id;
    return this.http.get<CvResponse>(url);
  }

  getCvExperiences(idCv: string): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/experiences/";
    return this.http.get<Response>(url);
  }

  getCvExperiencesFonctionnelles(idCv: string): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/competences_fonctionnelles/";
    return this.http.get<Response>(url);
  }

  getCvFormations(idCv: string): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/formations/";
    return this.http.get<Response>(url);
  }

  getCvLangues(idCv: string): Observable<Response> {
    const url = this.url_base + "url=cvs/"+idCv+"/langues/";
    return this.http.get<Response>(url);
  }

  getReferenceCompetences(): Observable<Response> {
    const url = this.url_base + "url=competences/";
    return this.http.get<Response>(url);
  }

}
