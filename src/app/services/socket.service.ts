import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { contact } from '../interfaces/contact-interface';
import { CustomSocket } from './customSocket';
import { message } from '../interfaces/message-interface';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;
  constructor(private chatService: ChatService) {
    this.socket = io('http://localhost:8080', {transports: ['websocket']});
  }

  getUserList(): Observable<contact[]> {
    return new Observable((observer) => {
      if (localStorage.getItem('token')) {
        this.socket.on('user-list', (users: contact[]) => {
          observer.next(users);
        });
      }
    });
  }

  getMessagee(){
    this.socket.on('inbox-message', (message: message) => {
      this.chatService.currentChat.push(message)
    });
  }

  emitMessage(payload: message){
    this.socket.emit("inbox-message", payload)
  }

  disconnect() {
    this.socket.disconnect();
  }
  connect() {
    this.socket.connect()
  }

  emitMainConnection(token: string){
    this.socket.emit("main-connection", token)
  }
}
