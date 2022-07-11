import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CvService } from '../cv.service';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-cartes-cv',
  templateUrl: './cartes-cv.component.html',
  styleUrls: ['./cartes-cv.component.scss']
})
export class CartesCvComponent implements OnInit {
  cvs: Array<Cv> = [];
  languages: Array<string> = [];
  data: Array<any> = [];
  constructor(private cvService: CvService, private router: Router) {

  }

  randomNumber(): number {
    return Math.floor(Math.random() * 100);
  }

  selectRandomSexe(): string {
    const num = this.randomNumber();
    return num % 2 == 0 ? "men" : "women";
  }

  ngOnInit(): void {
    this.languages = [
        "UI / UX",
				"Front End Development",
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Node"
    ];
    this.cvService.getCvs().subscribe(data => {
      this.cvs = <Array<Cv>>data.resultat;
      this.data = this.cvs.map(cv => {
        const randomSex = this.selectRandomSexe();
        const randomNumber = this.randomNumber();
        const urlBase = "https://randomuser.me/api/portraits/";
        const separator = "/";
        const ext = ".jpg";
        return {
          ...cv,
          imgSrc: urlBase + randomSex + separator + randomNumber + ext
        }
      });
      console.log(this.data);
    });
  }

  showCv(idCv: string){
    this.router.navigate(['/cv-tech/cv', idCv]);
  }

}
