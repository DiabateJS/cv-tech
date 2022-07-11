import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  @Input() experiences: Array<Experience> = [];
  constructor() { }

  ngOnInit(): void {
  }

}