import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../cv.service';
import { CompetenceFonctionnel } from '../models/competence-fonctionnel';
import { SUCCES_CODE, CREATE_ACTION, UPDATE_ACTION, DELETE_ACTION } from '../models/constants';
import { Cv } from '../models/cv';
import { ActionManager } from '../models/action-manager';
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
      if (res.code === SUCCES_CODE){
        this.cv = <Cv>res.resultat.data[0];
        this.selectedLanguages = this.utilService.LangagesToArray(this.cv.langages);
      }
    });

    this.loadExperiences();

    this.loadFormations();

    this.cvService.getCvLangues(this.idCv).subscribe(data => {
      if (data.code === SUCCES_CODE){
        this.langues = <Array<Langue>>data.resultat;
      }
    });

    this.cvService.getReferenceCompetences().subscribe(data => {
      const res: any = data.resultat;
      if (data.code === SUCCES_CODE){
        this.languages = this.utilService.CompetencesToArray(res.languages);
        this.frameworks = this.utilService.CompetencesToArray(res.frameworks);
        this.sgbd = this.utilService.CompetencesToArray(res.sgbd);
        this.os = this.utilService.CompetencesToArray(res.os);
        this.outils = this.utilService.CompetencesToArray(res.outils);
        this.methodes = this.utilService.CompetencesToArray(res.methodes);
        this.devops = this.utilService.CompetencesToArray(res.devops);
      }
    });

    this.loadCompetencesFonctionnelles();

    this.selectedFrameworks = ["ANGULAR", "ANGULARJS", "JPA", "HIBERNATE", "J2EE", "NODE.JS",
                        "REACT.JS", "REST", "SPRING", "SPRING BOOT", "TWITTER BOOTSTRAP"];

    this.selectedSgbd = ["MYSQL", "POSTGRESQL", "ORACLE", "SQL SERVER"];

    this.selectedOs = ["WINDOWS", "MAC OS", "LINUX", "WINDOWS 10"];

    this.selectedOutils = ["GIT", "IntelliJ IDEA", "JENKINS", "JIRA", "MAVEN", "TOMCAT"];

    this.selectedMethodes = ["SCRUM", "AGILE", "UML"];

    this.selectedDevops = ["Kubernetes", "Docker"];
  }

  private loadExperiences(): void {
    this.cvService.getCvExperiences(this.idCv).subscribe(data => {
      if (data.code === SUCCES_CODE){
        this.experiences = <Array<Experience>>data.resultat;
      }
    });
  }

  private loadCompetencesFonctionnelles(): void {
    this.cvService.getCvExperiencesFonctionnelles(this.idCv).subscribe(data => {
      const res: any = data.resultat;
      this.fonctionnels = res;
    });
  }

  private loadFormations(): void {
    this.cvService.getCvFormations(this.idCv).subscribe(data => {
      if (data.code === SUCCES_CODE){
        this.formations = <Array<Formation>>data.resultat;
      }
    });
  }

  competenceFonctAction($event: ActionManager<CompetenceFonctionnel>): void {
    if ($event.action === CREATE_ACTION){
      this.cvService.createExperienceFonctionnelle(this.idCv, $event.element).subscribe(data => {
        if (data.code === SUCCES_CODE){
          this.loadCompetencesFonctionnelles();
        }
      });
    }
    if ($event.action === UPDATE_ACTION){
      this.cvService.updateExperienceFonctionnelle(this.idCv, $event.element).subscribe(data => {
        console.log(data);
        if (data.code === SUCCES_CODE){
          this.loadCompetencesFonctionnelles();
        }
      });
    }
    if ($event.action === DELETE_ACTION){
      this.cvService.deleteExperienceFonctionnelle(this.idCv, $event.element).subscribe(data => {
        this.loadCompetencesFonctionnelles();
      });
    }
  }

  formationAction($event: ActionManager<Formation>): void {
    if ($event.action === CREATE_ACTION){
      this.cvService.createFormation(this.idCv, $event.element).subscribe(data => {
        if (data.code === SUCCES_CODE){
          this.loadFormations();
        }
      });
    }
    if ($event.action === DELETE_ACTION){
      this.cvService.deleteFormation(this.idCv, $event.element).subscribe(data => {
        if (data.code === SUCCES_CODE){
          this.loadFormations();
        }
      });
    }
    if ($event.action === UPDATE_ACTION){
      this.cvService.updateFormation(this.idCv, $event.element).subscribe(data => {
        if (data.code === SUCCES_CODE){
          this.loadFormations();
        }
      });
    }
  }

  newLangue($event: Langue): void {
    this.langues.push($event);
  }

  experienceAction($event: ActionManager<Experience>): void {
    
    if ($event.action === CREATE_ACTION){
        this.cvService.createExperience(this.idCv, $event.element).subscribe(data => {
          if (data.code === SUCCES_CODE){
            this.loadExperiences();
          }
        });
    }
    if ($event.action === UPDATE_ACTION){
      // Mise à jour en base de données
      this.cvService.updateExperience(this.idCv, $event.element).subscribe(data => {
        if (data.code === SUCCES_CODE){
          // Chargement des expériences
          this.loadExperiences();
        }
      });
    }
    if ($event.action === DELETE_ACTION){
      this.cvService.deleteExperience(this.idCv, $event.element).subscribe(data => {
        if (data.code === SUCCES_CODE){
          //Chargement des expériences
          this.loadExperiences();
        }
      });
    }
  }
    
}
