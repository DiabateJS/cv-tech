import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData } from './models/authdata';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { AuthResponse } from './models/authresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url_base: string = "";
  constructor(private http: HttpClient) { 
    this.url_base = "http://localhost:8888/ws-wconsulting/index.php?";
  }

  auth(user: User): Observable<AuthResponse> {
    const url = this.url_base + "url=auth/&login="+user.login+"&password="+user.password;
    return this.http.get<AuthResponse>(url);
  }
}
