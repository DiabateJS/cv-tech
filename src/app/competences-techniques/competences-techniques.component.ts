import { AstPath } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Langage } from '../models/langage';

@Component({
  selector: 'app-competences-techniques',
  templateUrl: './competences-techniques.component.html',
  styleUrls: ['./competences-techniques.component.scss']
})
export class CompetencesTechniquesComponent implements OnInit {
  
  @Input()
  languages: Array<string> = [];
  @Input()
  selectedLanguages: Array<string> = [];
  @Input()
  frameworks: Array<string> = [];
  @Input()
  selectedFrameworks: Array<string> = [];
  @Input()
  selectedSgbd: Array<string> = [];
  @Input()
  sgbd: Array<string> = [];
  @Input()
  selectedOs: Array<string> = [];
  @Input()
  os: Array<string> = [];
  @Input()
  outils: Array<string> = [];
  @Input()
  selectedOutils: Array<string> = [];
  @Input()
  methodes: Array<string> = [];
  @Input()
  selectedMethodes: Array<string> = [];
  @Input()
  devops: Array<string> = [];
  @Input()
  selectedDevops: Array<string> = [];

  showLangages: boolean = false;
  showFrameworks: boolean = false;
  showSgbd: boolean = false;
  showOs: boolean = false;
  showOutils: boolean = false;
  showMethodes: boolean = false;
  showDevops: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  initShows() {
    this.showLangages = false;
    this.showFrameworks = false;
    this.showSgbd = false;
    this.showOs = false;
    this.showOutils = false;
    this.showMethodes = false;
    this.showDevops = false;
  }

  canShowLanguages(){
    this.initShows();
    this.showLangages = true;
  }

  canShowFrameworks(){
    this.initShows();
    this.showFrameworks = true;
  }

  canShowSgbd(){
    this.initShows();
    this.showSgbd = true;
  }

  canShowOs(){
    this.initShows();
    this.showOs = true;
  }

  canShowOutils(){
    this.initShows();
    this.showOutils = true;
  }

  canShowMethodes(){
    this.initShows();
    this.showMethodes = true;
  }

  canShowDevops(){
    this.initShows();
    this.showDevops = true;
  }

  validerCompetences(){
    this.initShows();
    
  }

  updateCheckedLanguages(lang: string, $event: any){
    const elementIndex = this.selectedLanguages.indexOf(lang);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedLanguages.push(lang);
      }
    }else{
      if (elementIndex != -1){
        this.selectedLanguages.splice(elementIndex,1);
      }
    }
  }

  updateCheckedFrameworks(framework: string, $event: any){
    const elementIndex = this.selectedFrameworks.indexOf(framework);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedFrameworks.push(framework);
      }
    }else{
      if (elementIndex != -1){
        this.selectedFrameworks.splice(elementIndex,1);
      }
    }
  }

  updateCheckedSgbd(lang: string, $event: any){
    const elementIndex = this.selectedSgbd.indexOf(lang);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedSgbd.push(lang);
      }
    }else{
      if (elementIndex != -1){
        this.selectedSgbd.splice(elementIndex,1);
      }
    }
  }

  updateCheckedOs(os: string, $event: any){
    const elementIndex = this.selectedOs.indexOf(os);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedOs.push(os);
      }
    }else{
      if (elementIndex != -1){
        this.selectedOs.splice(elementIndex,1);
      }
    }
  }

  updateCheckedOutils(outil: string, $event: any){
    const elementIndex = this.selectedOutils.indexOf(outil);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedOutils.push(outil);
      }
    }else{
      if (elementIndex != -1){
        this.selectedOutils.splice(elementIndex,1);
      }
    }
  }

  updateCheckedMethodes(methode: string, $event: any){
    const elementIndex = this.selectedMethodes.indexOf(methode);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedMethodes.push(methode);
      }
    }else{
      if (elementIndex != -1){
        this.selectedMethodes.splice(elementIndex,1);
      }
    }
  }

  updateCheckedDevops(dev: string, $event: any){
    const elementIndex = this.selectedDevops.indexOf(dev);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedDevops.push(dev);
      }
    }else{
      if (elementIndex != -1){
        this.selectedDevops.splice(elementIndex,1);
      }
    }
  }

}
