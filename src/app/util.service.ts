import { Injectable } from '@angular/core';
import { Competence } from './models/competence';
import { Langage } from './models/langage';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  CompetencesToArray(data: Array<Competence>): Array<string> {
    let tab: Array<string> = [];
    data.forEach((elt: Competence) => {
      tab.push(elt.libelle);
    });
    return tab;
  }

  LangagesToArray(data: Array<Langage>): Array<string> {
    let tab: Array<string> = [];
    data.forEach((elt: Langage) => {
      tab.push(elt.libelle);
    });
    return tab;
  }
}
