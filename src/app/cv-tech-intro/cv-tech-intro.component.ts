import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-tech-intro',
  templateUrl: './cv-tech-intro.component.html',
  styleUrls: ['./cv-tech-intro.component.scss']
})
export class CvTechIntroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAuth(): void {
    this.router.navigate(['/auth']);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

}
