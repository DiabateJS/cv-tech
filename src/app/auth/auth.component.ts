import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthResponse } from '../models/authresponse';
import { User } from '../models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  login: string = "";
  password: string = "";
  msgError: string = "";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  auth(): void {
    let user: User = {login: this.login, password: this.password} as User;
    this.authService.auth(user).subscribe((res: AuthResponse) => {
      console.log(res);
      if (res.data.length == 1){
        this.router.navigate(['cv-tech/cv',res.data[0].id])
      }else {
        this.msgError = "Echec authentification";
      }
    });
  }

}
