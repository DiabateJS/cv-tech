import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionManager } from '../models/action-manager';
import { CREATE_ACTION, DELETE_ACTION, UPDATE_ACTION } from '../models/constants';
import { Langue } from '../models/langue';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.component.html',
  styleUrls: ['./langues.component.scss']
})
export class LanguesComponent implements OnInit {
  @Input() langues: Array<Langue> = [];
  @Output() langue: EventEmitter<ActionManager<Langue>> = new EventEmitter<ActionManager<Langue>>();

  canShowFormLangue: boolean = false;
  canShowFormUpdateLangue: boolean = false;

  selectedLangue: Langue = {} as Langue;
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
    const action = {action: CREATE_ACTION, element: lang} as ActionManager<Langue>;
    this.langue.emit(action);
    this.libelle = "";
    this.niveau = "";
    this.canShowFormLangue = false;
  }

  updateLangue(): void {
    const action: ActionManager<Langue> = {action: UPDATE_ACTION, element: this.selectedLangue} as ActionManager<Langue>;
    this.langue.emit(action); 
    this.selectedLangue = {} as Langue;
    this.canShowFormLangue = false;
    this.canShowFormUpdateLangue = false;
  }

  delete(id: string): void {
    this.selectedLangue = this.langues.filter(l => l.id == id)[0];
    const action: ActionManager<Langue> = {action: DELETE_ACTION, element: this.selectedLangue} as ActionManager<Langue>;
    this.langue.emit(action);
  }

  edit(id: string): void {
    this.selectedLangue = this.langues.filter(l => l.id == id)[0];
    this.canShowFormLangue = false;
    this.canShowFormUpdateLangue = true;
  }

}
