import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CompetenceFonctionnel } from '../models/competence-fonctionnel';

@Component({
  selector: 'app-competences-fonctionnelles',
  templateUrl: './competences-fonctionnelles.component.html',
  styleUrls: ['./competences-fonctionnelles.component.scss']
})
export class CompetencesFonctionnellesComponent implements OnInit {

  @Input()
  fonctionnels: Array<CompetenceFonctionnel> = [];
  @Output()
  competence: EventEmitter<CompetenceFonctionnel> = new EventEmitter<CompetenceFonctionnel>();
  titre: string = "";
  description: string = "";
  canShowCompetenceFonctForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveCompetence(): void {
    const competence: CompetenceFonctionnel = {id:"",libelle: this.titre, description: this.description} as CompetenceFonctionnel;
    this.competence.emit(competence);
    this.canShowCompetenceFonctForm = false;
  }

  addCompetence(): void {
    this.canShowCompetenceFonctForm = true;
  }

}
