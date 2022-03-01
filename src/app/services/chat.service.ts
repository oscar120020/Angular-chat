import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { message } from '../interfaces/message-interface';
import { contact } from '../interfaces/contact-interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentChat: message[] = [];
  chatUser: contact;
  chatSelected: string;
  baseUrl = "http://localhost:8080"
  constructor(private http: HttpClient) {}

  getAllMessages(uid: string, token: string){
    this.chatSelected = uid
    this.http.get(`${this.baseUrl}/api/messages/${uid}`, {
      headers: {
        "x-token": token
      }
    })
    .subscribe((data: any) => {
      const messages: message[] = data.messages
      this.currentChat = messages
      this.chatUser = data.user
    })
  }
}
