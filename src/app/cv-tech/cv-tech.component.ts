import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../cv.service';
import { CompetenceFonctionnel } from '../models/competence-fonctionnel';
import { Constants } from '../models/constants';
import { Cv } from '../models/cv';
import { Experience } from '../models/experience';
import { Formation } from '../models/formation';
import { Langue } from '../models/langue';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-cv-tech',
  templateUrl: './cv-tech.component.html',
  styleUrls: ['./cv-tech.component.scss']
})
export class CvTechComponent implements OnInit {
  
  cv: Cv = {} as Cv;
  experiences: Array<Experience> = [];
  formations: Array<Formation> = [];
  langues: Array<Langue> = [];
  fonctionnels: Array<CompetenceFonctionnel> = [];
  languages: Array<string> = [];
  selectedLanguages: Array<string> = [];
  frameworks: Array<string> = [];
  selectedFrameworks: Array<string> = [];
  selectedSgbd: Array<string> = [];
  sgbd: Array<string> = [];
  selectedOs: Array<string> = [];
  os: Array<string> = [];
  outils: Array<string> = [];
  selectedOutils: Array<string> = [];
  methodes: Array<string> = [];
  selectedMethodes: Array<string> = [];
  devops: Array<string> = [];
  selectedDevops: Array<string> = [];

  idCv: string = "";

  constructor(private cvService: CvService, private utilService: UtilService,
              private route: ActivatedRoute) {
                this.route.params.subscribe(params => {
                  this.idCv = params["id"];
                }); 

  }

  ngOnInit(): void {
    this.cvService.getCvById(this.idCv).subscribe(res => {
      if (res.code === Constants.SUCCES_CODE){
        this.cv = <Cv>res.resultat.data[0];
        this.selectedLanguages = this.utilService.LangagesToArray(this.cv.langages);
      }
    });

    this.cvService.getCvExperiences(this.idCv).subscribe(data => {
      if (data.code === Constants.SUCCES_CODE){
        this.experiences = <Array<Experience>>data.resultat;
      }
    });

    this.cvService.getCvFormations(this.idCv).subscribe(data => {
      if (data.code === Constants.SUCCES_CODE){
        this.formations = <Array<Formation>>data.resultat;
      }
    });

    this.cvService.getCvLangues(this.idCv).subscribe(data => {
      if (data.code === Constants.SUCCES_CODE){
        this.langues = <Array<Langue>>data.resultat;
      }
    });

    this.cvService.getReferenceCompetences().subscribe(data => {
      const res: any = data.resultat;
      if (data.code === Constants.SUCCES_CODE){
        this.languages = this.utilService.CompetencesToArray(res.languages);
        this.frameworks = this.utilService.CompetencesToArray(res.frameworks);
        this.sgbd = this.utilService.CompetencesToArray(res.sgbd);
        this.os = this.utilService.CompetencesToArray(res.os);
        this.outils = this.utilService.CompetencesToArray(res.outils);
        this.methodes = this.utilService.CompetencesToArray(res.methodes);
        this.devops = this.utilService.CompetencesToArray(res.devops);
      }
    });

    this.cvService.getCvExperiencesFonctionnelles(this.idCv).subscribe(data => {
      const res: any = data.resultat;
      this.fonctionnels = res;
    });

    this.selectedFrameworks = ["ANGULAR", "ANGULARJS", "JPA", "HIBERNATE", "J2EE", "NODE.JS",
                        "REACT.JS", "REST", "SPRING", "SPRING BOOT", "TWITTER BOOTSTRAP"];

    this.selectedSgbd = ["MYSQL", "POSTGRESQL", "ORACLE", "SQL SERVER"];

    this.selectedOs = ["WINDOWS", "MAC OS", "LINUX", "WINDOWS 10"];

    this.selectedOutils = ["GIT", "IntelliJ IDEA", "JENKINS", "JIRA", "MAVEN", "TOMCAT"];

    this.selectedMethodes = ["SCRUM", "AGILE", "UML"];

    this.selectedDevops = ["Kubernetes", "Docker"];
  }

  newExperience($event: Experience): void {
    this.experiences.push($event);
  }

  newCompetence($event: CompetenceFonctionnel): void {
    this.fonctionnels.push($event);
  }

  newFormation($event: Formation): void {
    this.formations.push($event);
  }

  newLangue($event: Langue): void {
    this.langues.push($event);
  }

  newExperiencePro($event: Experience): void {
    this.experiences.push($event);
  }
    
}
