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
  socket: Socket;
  contactsBack: contact[];
  contacts: contact[];
  constructor(private chatService: ChatService) {
    this.socket = io('http://localhost:8080', {transports: ['websocket']});
  }

  getUserList(userId: string): Observable<boolean>{
    return new Observable((observer) => {
        this.socket.on('user-list', (users: contact[]) => {
          this.contactsBack = users.filter(d => d.uid !== userId)
          observer.next(true);
        });
    });
  }

  filterUserList(query: string){    
    this.contacts = [...this.contactsBack]
    if(query){
      this.contacts = this.contacts.filter(d => d.name.includes(query))
    }
  }

  getMessagee(){
    this.socket.on('inbox-message', (message: message) => {
      this.chatService.currentChat.push(message)
    });
  }

  emitWriting(writing: boolean, to: string, from: string){
    this.socket.emit("writing", {
      writing, 
      from,
      to,
    })
  }

  getWriting(){

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
