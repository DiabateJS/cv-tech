import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experiences-pro',
  templateUrl: './experiences-pro.component.html',
  styleUrls: ['./experiences-pro.component.scss']
})
export class ExperiencesProComponent implements OnInit {
  @Input() experiences: Array<Experience> = [];
  @Output() experiencePro: EventEmitter<Experience> = new EventEmitter<Experience>();
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
    this.showEditZone = false;
  }

  addExpPro(): void {
    this.showNewExpProForm = true;
  }

  saveExpPro(): void {
    let maxId = 0;
    this.experiences.forEach(e => {
          maxId = parseInt(e.id) > maxId ? parseInt(e.id) : maxId;
    });
    const experience = {id: ''+(maxId+1), client: this.client, description: this.description, ville: this.ville, 
                        projet: "", poste: "", debut: "", fin: "", envtech: ""} as Experience;
    this.experiencePro.emit(experience);
    this.showNewExpProForm = false;
  }

}
