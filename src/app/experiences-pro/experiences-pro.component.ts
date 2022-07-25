import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CREATE_ACTION, UPDATE_ACTION, DELETE_ACTION } from '../models/constants';
import { ActionManager } from '../models/action-manager';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experiences-pro',
  templateUrl: './experiences-pro.component.html',
  styleUrls: ['./experiences-pro.component.scss']
})
export class ExperiencesProComponent implements OnInit {
  @Input() experiences: Array<Experience> = [];
  @Output() experiencePro: EventEmitter<ActionManager<Experience>> = new EventEmitter<ActionManager<Experience>>();
  selectedExperience: Experience = {} as Experience;
  showEditZone: boolean = false;
  showNewExpProForm: boolean = false;

  client: string = "";
  description: string = "";
  ville: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  edit(id: string){
    this.showEditZone = true;
    this.selectedExperience = this.experiences.filter(exp => exp.id === id)[0];
  }

  save(){
    const action = {action: UPDATE_ACTION, element: this.selectedExperience} as ActionManager<Experience>;
    this.experiencePro.emit(action);
    this.showEditZone = false;
  }

  addExpPro(): void {
    this.showNewExpProForm = true;
  }

  saveExpPro(): void {
    const experience = {id: "", client: this.client, description: this.description, taches: "", ville: this.ville, 
                        projet: "", poste: "", debut: "", fin: "", envtech: ""} as Experience;
    const action = {action:CREATE_ACTION, element: experience} as ActionManager<Experience>;                    
    this.experiencePro.emit(action);
    this.client = "";
    this.description = "";
    this.ville = "";
    this.showNewExpProForm = false;
  }

  delete(id: string): void {
    const expToDelete = this.experiences.filter(exp => exp.id === id)[0];
    const action = {action:DELETE_ACTION, element: expToDelete} as ActionManager<Experience>;
    this.experiencePro.emit(action);
  }

}
