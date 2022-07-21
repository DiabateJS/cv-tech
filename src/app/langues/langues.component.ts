import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Langue } from '../models/langue';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.component.html',
  styleUrls: ['./langues.component.scss']
})
export class LanguesComponent implements OnInit {
  @Input() langues: Array<Langue> = [];
  @Output() langue: EventEmitter<Langue> = new EventEmitter<Langue>();

  canShowFormLangue: boolean = false;
  libelle: string = "";
  niveau: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addLangue(): void {
    this.canShowFormLangue = true;
  }

  saveLangue(): void {
    const lang = {id:"",libelle:this.libelle, niveau:this.niveau} as Langue;
    this.langue.emit(lang);
    this.canShowFormLangue = false;
  }

}
