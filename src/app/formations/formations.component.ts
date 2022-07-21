import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Formation } from '../models/formation';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  @Input() formations: Array<Formation> = [];
  @Output() formation: EventEmitter<Formation> = new EventEmitter<Formation>();
  
  organisme: string = "";
  annee: string = "";
  description: string = "";

  canShowFormFormation: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  newFormation(): void {
    this.canShowFormFormation = true;
  }

  saveDiplome(): void {
    const formation = {id:"",organisme:this.organisme,annee:this.annee, description:this.description} as Formation;
    this.formation.emit(formation);
    this.canShowFormFormation = false;
  }

}
