import { Component, Input, OnInit } from '@angular/core';
import { CompetenceFonctionnel } from '../models/competence-fonctionnel';

@Component({
  selector: 'app-competences-fonctionnelles',
  templateUrl: './competences-fonctionnelles.component.html',
  styleUrls: ['./competences-fonctionnelles.component.scss']
})
export class CompetencesFonctionnellesComponent implements OnInit {

  @Input()
  fonctionnels: Array<CompetenceFonctionnel> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
