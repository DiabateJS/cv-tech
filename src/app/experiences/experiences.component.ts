import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActionManager } from '../models/action-manager';
import { CREATE_ACTION, DELETE_ACTION } from '../models/constants';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  @Input() experiences: Array<Experience> = [];
  @Output() exps: EventEmitter<ActionManager<Experience>> = new EventEmitter<ActionManager<Experience>>();
  client: string = "";
  description: string = "";
  showNewExperienceForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  newExperience(): void {
    this.showNewExperienceForm = true;
  }

  saveExperience(): void {
    const experience = {id:"", client: this.client, description: this.description} as Experience;
    const action = {action: CREATE_ACTION, element: experience} as ActionManager<Experience>;
    this.exps.emit(action);
    this.client = "";
    this.description = "";
    this.showNewExperienceForm = false;
  }

  delete(id: string): void {
    const expToDelete = this.experiences.filter(exp => exp.id === id)[0];
    const action = {action:DELETE_ACTION, element: expToDelete} as ActionManager<Experience>;
    this.exps.emit(action);
  }

}