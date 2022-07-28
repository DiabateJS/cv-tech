import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionManager } from '../models/action-manager';
import { UPDATE_ACTION } from '../models/constants';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() info: Cv = {} as Cv;
  @Output() cv: EventEmitter<ActionManager<Cv>> = new EventEmitter<ActionManager<Cv>>();
  constructor() { }

  ngOnInit(): void {
  }

  saveCv(): void {
    let cv: Cv = {} as Cv;
    cv.id = this.info.id;
    cv.titre = this.info.titre;
    cv.poste = this.info.poste;
    cv.annee = this.info.annee;
    cv.dispo = this.info.dispo;
    cv.intro = this.info.intro;
    const action: ActionManager<Cv> = {action: UPDATE_ACTION, element: cv};
    this.cv.emit(action);
  }

}
