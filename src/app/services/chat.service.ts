import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { message } from '../interfaces/message-interface';
import { contact } from '../interfaces/contact-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentChat: message[] = [];
  chatUser: contact;
  chatSelected: string;
  baseUrl = "http://localhost:8080"
  offset: number = 0;
  $emitter = new EventEmitter()
  constructor(private http: HttpClient) {}

  getAllMessages(uid: string, token: string){
    this.chatSelected = uid
    return new Observable((observer) => {
      this.http.get(`${this.baseUrl}/api/messages/${uid}?offset=${this.offset}`, {
        headers: {
          "x-token": token
        }
      })
      .subscribe((data: any) => {
        const messages: message[] = data.messages
        this.currentChat.unshift(...messages)
        this.chatUser = data.user
        observer.next(true)
      })
    })
    
  }
}
