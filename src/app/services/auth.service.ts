import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, register } from '../interfaces/auth-interfaces';
import { contact } from '../interfaces/contact-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api_url = "http://localhost:8080"
  constructor(private http: HttpClient) {
    console.log("gggg");
  }
  isLoggedin: boolean = false
  user: contact;

  login(data: login){
    return this.http.post(`${this.api_url}/api/login`, data)
  }

  register(data: register){
    return this.http.post(`${this.api_url}/api/login/new`, data)
  }

  validateToken(token: string){
    return this.http.get(`${this.api_url}/api/login/renew`, {
      headers:{
        "x-token": token
      }
    })
  }

}
