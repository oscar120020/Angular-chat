import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, register } from '../interfaces/auth-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api_url = "http://localhost:8080"
  constructor(private http: HttpClient) { }
  authenticeted = {
    isLoggedin: false
  }
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
