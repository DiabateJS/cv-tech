import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionManager } from '../models/action-manager';
import { CREATE_ACTION, DELETE_ACTION, UPDATE_ACTION } from '../models/constants';
import { Formation } from '../models/formation';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  @Input() formations: Array<Formation> = [];
  @Output() formation: EventEmitter<ActionManager<Formation>> = new EventEmitter<ActionManager<Formation>>();
  
  organisme: string = "";
  annee: string = "";
  description: string = "";
  selectedFormation: Formation = {} as Formation;

  canShowFormFormation: boolean = false;
  canShowFormUpdateFormation: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  newFormation(): void {
    this.canShowFormFormation = true;
    this.canShowFormUpdateFormation = false;
  }

  saveDiplome(): void {
    const formation = {id:"",organisme:this.organisme,annee:this.annee, description:this.description} as Formation;
    const action: ActionManager<Formation> = {action: CREATE_ACTION, element: formation} as ActionManager<Formation>;
    this.formation.emit(action);
    this.organisme = "";
    this.annee = "";
    this.description = "";
    this.canShowFormFormation = false;
    this.canShowFormUpdateFormation = false;
  }

  delete(idFormation: string): void {
    const selectedFormation = this.formations.filter(f => f.id == idFormation)[0];
    const action: ActionManager<Formation> = {action: DELETE_ACTION, element: selectedFormation} as ActionManager<Formation>;
    this.formation.emit(action);
  }

  edit(idFormation: string): void {
    this.selectedFormation = this.formations.filter(f => f.id == idFormation)[0];
    this.canShowFormFormation = false;
    this.canShowFormUpdateFormation = true;
  }

  updateDiplome(): void {
    const action: ActionManager<Formation> = {action: UPDATE_ACTION, element: this.selectedFormation} as ActionManager<Formation>;
    this.formation.emit(action);
    this.organisme = "";
    this.annee = "";
    this.description = "";
    this.canShowFormFormation = false;
    this.canShowFormUpdateFormation = false;
  }

}
