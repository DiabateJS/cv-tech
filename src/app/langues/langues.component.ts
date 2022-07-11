import { Component, Input, OnInit } from '@angular/core';
import { Langue } from '../models/langue';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.component.html',
  styleUrls: ['./langues.component.scss']
})
export class LanguesComponent implements OnInit {
  @Input() langues: Array<Langue> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
