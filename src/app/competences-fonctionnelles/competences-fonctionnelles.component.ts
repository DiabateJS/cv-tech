import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActionManager } from '../models/action-manager';
import { CompetenceFonctionnel } from '../models/competence-fonctionnel';
import { CREATE_ACTION, DELETE_ACTION, UPDATE_ACTION } from '../models/constants';

@Component({
  selector: 'app-competences-fonctionnelles',
  templateUrl: './competences-fonctionnelles.component.html',
  styleUrls: ['./competences-fonctionnelles.component.scss']
})
export class CompetencesFonctionnellesComponent implements OnInit {

  @Input()
  fonctionnels: Array<CompetenceFonctionnel> = [];
  @Output()
  competence: EventEmitter<ActionManager<CompetenceFonctionnel>> = new EventEmitter<ActionManager<CompetenceFonctionnel>>();
  titre: string = "";
  description: string = "";
  canShowCompetenceFonctForm: boolean = false;
  canShowCompetenceFonctUpdateForm: boolean = false;
  selectedCompetenceFonctionnelle: CompetenceFonctionnel = {} as CompetenceFonctionnel;

  constructor() { }

  ngOnInit(): void {
  }

  saveCompetence(): void {
    const competence: CompetenceFonctionnel = {id:"",libelle: this.titre, description: this.description} as CompetenceFonctionnel;
    const action: ActionManager<CompetenceFonctionnel> = {action: CREATE_ACTION, element: competence};
    this.competence.emit(action);
    this.titre = "";
    this.description = "";
    this.canShowCompetenceFonctForm = false;
    this.canShowCompetenceFonctUpdateForm = false;
  }

  addCompetence(): void {
    this.canShowCompetenceFonctForm = true;
    this.canShowCompetenceFonctUpdateForm = false;
  }

  updateCompetence(): void {
    const action: ActionManager<CompetenceFonctionnel> = {action: UPDATE_ACTION, element: this.selectedCompetenceFonctionnelle};
    this.competence.emit(action);
    this.canShowCompetenceFonctUpdateForm = false;
    this.canShowCompetenceFonctForm = false;
  }

  delete(id: string): void {
    const competence = this.fonctionnels.filter(f => f.id === id)[0];
    const action: ActionManager<CompetenceFonctionnel> = {action: DELETE_ACTION, element: competence};
    this.competence.emit(action);
  }

  edit(id: string): void {
    this.canShowCompetenceFonctForm = false;
    this.canShowCompetenceFonctUpdateForm = true;
    this.selectedCompetenceFonctionnelle = this.fonctionnels.filter(f => f.id == id)[0];
  }

}
