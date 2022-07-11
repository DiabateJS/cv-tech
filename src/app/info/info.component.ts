import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() info: Cv = {} as Cv;
  constructor() { }

  ngOnInit(): void {
  }

}
