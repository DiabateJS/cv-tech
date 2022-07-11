import { Component, Input, OnInit } from '@angular/core';
import { Formation } from '../models/formation';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  @Input() formations: Array<Formation> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
