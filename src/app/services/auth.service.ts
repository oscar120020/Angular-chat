import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, register } from '../interfaces/auth-interfaces';
import { contact } from '../interfaces/contact-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api_url = environment.apiURL
  constructor(private http: HttpClient) {}
  isLoggedin: boolean = false
  user: contact;

  login(data: login){
    return this.http.post(`${this.api_url}/api/login`, data)
  }

  register(data: register){
    return this.http.post(`${this.api_url}/api/login/new`, data)
  }

  updateUserName(userName: string, token: string){
    return this.http.put(`${this.api_url}/api/login/update-username`, {userName}, {
      headers: {
        "x-token": token
      }
    })
  }

  validateToken(token: string){
    return this.http.get(`${this.api_url}/api/login/renew`, {
      headers:{
        "x-token": token
      }
    })
  }

}
