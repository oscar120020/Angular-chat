import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { contact } from '../interfaces/contact-interface';
import { CustomSocket } from './customSocket';
import { message } from '../interfaces/message-interface';
import { ChatService } from './chat.service';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: Socket;
  contactsBackUp: contact[];
  contacts: contact[];
  waitMessages: number = 0
  constructor(private chatService: ChatService, private authService: AuthService) {
    this.socket = io('http://localhost:8080', {transports: ['websocket']});
  }

  getUserList(userId: string): Observable<boolean>{
    return new Observable((observer) => {
        this.socket.on('user-list', (users: contact[]) => {
          this.contactsBackUp = users.filter(d => d.uid !== userId)
          observer.next(true);
        });
    });
  }

  filterUserList(query: string){    
    this.contacts = [...this.contactsBackUp]
    if(query){
      this.contacts = this.contacts.filter(d => d.name.includes(query))
    }
  }

  getMessagee(){
    this.socket.on('inbox-message', (message: message) => {
      if(message.from === this.authService.user.uid){
        this.chatService.getLastMessages(message.to)
      }else{
        if(this.chatService.boxChatHeight){
          this.chatService.currentChat.push(message)
        }else{
          this.waitMessages += 1
        }
      }
    });
  }

  emitWriting(writing: boolean, to: string, from: string){
    this.socket.emit("writing", {
      writing, 
      from,
      to,
    })
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
