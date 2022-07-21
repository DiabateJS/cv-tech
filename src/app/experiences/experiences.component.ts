import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  @Input() experiences: Array<Experience> = [];
  @Output() exps: EventEmitter<Experience> = new EventEmitter<Experience>();
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
    this.exps.emit(experience);
    this.client = "";
    this.description = "";
    this.showNewExperienceForm = false;
  }

}