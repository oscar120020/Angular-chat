import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { message } from '../interfaces/message-interface';
import { contact } from '../interfaces/contact-interface';
import { Observable } from 'rxjs';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentChat: message[] = [];
  chatUser: contact;
  chatSelected: string;
  baseUrl = "http://localhost:8080"
  offsetTop: number = 0;
  offsetBotton: number = 0;
  offsetFind: number = 0;
  $selectNewChatEmitter = new EventEmitter()
  $selectMessageEmmiter = new EventEmitter<string>()
  query: string = "";
  searchMessagesList: message[] = [];
  boxChatHeight: boolean = true;
  constructor(private http: HttpClient) {}

  getAllMessages(uid: string, token: string, getTop: boolean, msgId?: string){
    this.chatSelected = uid
    return new Observable((observer) => {
      this.http.get(`${this.baseUrl}/api/messages/${uid}?offset=${getTop ? this.offsetTop: this.offsetBotton}`, {
        headers: {
          "x-token": token
        }
      })
      .subscribe((data: any) => {
        const messages: message[] = data.messages
        if(msgId){
          this.currentChat = messages
        }else{
          if(getTop){
            this.currentChat.unshift(...messages)
          }else{
            this.currentChat.push(...messages)
          }
        }
        this.chatUser = data.user
        observer.next(data)
      })
    })
  }

  getFoundMessages(uid: string, token: string, message: string){
    return new Observable((observer) => {
      if(message.length <= 0) {
        this.searchMessagesList = []
        observer.next(true)
      }else{
        this.http.get(`${this.baseUrl}/api/messages/find/${uid}?offset=${this.offsetFind}&message=${message}`, {
          headers: {
            "x-token": token
          }
        })
        .subscribe((data: any) => {
          const messages: message[] = data.messages
          this.searchMessagesList = messages
          observer.next(true)
        })
      }
    })
  }

  getMessagePosition(uid: string, token: string, messageId: string){
    return new Observable((observer) => {
      this.http.get(`${this.baseUrl}/api/messages/position/${uid}?offset=${this.offsetFind}&messageId=${messageId}`, {
        headers: {
          "x-token": token
        }
      })
      .subscribe((data: any) => {
        if(data.msgPosition === 0){
          this.offsetBotton = data.tl - 20;
          this.offsetTop = data.tl - 20;
        }
        else if(data.msgPosition === data.tl - 1){
          this.offsetBotton = data.tl - data.msgPosition - 1;
          this.offsetTop = data.tl - data.msgPosition - 1;
        }else{
          this.offsetBotton = data.tl - data.msgPosition - 20;
          this.offsetTop = data.tl - data.msgPosition - 20;
        }
        observer.next(data.msgPosition)
      })
    })
  }

  getLastMessages(uid: string){
    return new Observable((observer) => {
      this.offsetTop = 0
      this.offsetBotton = 0
      this.getAllMessages(uid, localStorage.getItem("token") ?? "", true)
      .subscribe((data: any) => {
        this.currentChat = data.messages
        observer.next(true)
      })
    })
  }

}
