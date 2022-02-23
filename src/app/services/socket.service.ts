import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { contact } from '../interfaces/contact-interface';
import { CustomSocket } from './customSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: CustomSocket) {
  }

  getUserList(): Observable<contact[]>{
    return new Observable((observer) => {
      if(localStorage.getItem("token")){
        this.socket.on("user-list", (users: contact[]) => {
          observer.next(users)
        })
      }
    })
  }

  disconnect(){
    this.socket.disconnect()
  }
  connect(){
    this.socket.connect()
  }

}
