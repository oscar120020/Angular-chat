import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NameResponse } from '../interfaces/auth-interfaces';
import { contact } from '../interfaces/contact-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  query: string = "";
  isOpenSearchMessage = false
  userActive: string;
  apiUrl: string = environment.apiURL
  $openPerfil = new EventEmitter()
  constructor(private http: HttpClient) { }

  UpdateName(name: string, myId: string, token: string): Observable<contact>{
    return this.http.put(`${this.apiUrl}/api/login/changeName/${myId}`, {name}, {
      headers: {
        'Content-Type': "application/json",
        "x-token": token
      }
    })
    .pipe(
      map((res: any | NameResponse) => {
        return res.response
      })
    )
  }

  UpdatePassword(currentPass: string, newPass: string, myId: string, token: string): Observable<contact>{
    return this.http.put(`${this.apiUrl}/api/login/changePassword/${myId}`, {newPass, currentPass}, {
      headers: {
        'Content-Type': "application/json",
        "x-token": token
      }
    })
    .pipe(
      map((res: any | NameResponse) => {
        return res.response
      })
    )
  }

  changeImagePerfil(data: FormData, myId: string, token: string){
    return this.http.post(`${this.apiUrl}/api/login/changePerfil/${myId}`, data, {
      headers: {
        "x-token": token,
      }
    })
    .pipe(
      map((res: any | NameResponse) => {
        return res.response
      })
    )
  }
}
