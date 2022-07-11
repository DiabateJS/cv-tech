import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experiences-pro',
  templateUrl: './experiences-pro.component.html',
  styleUrls: ['./experiences-pro.component.scss']
})
export class ExperiencesProComponent implements OnInit {
  @Input() experiences: Array<Experience> = [];
  selectedExperience: Experience = {} as Experience;
  showEditZone: boolean = false;
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

}
