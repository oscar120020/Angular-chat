import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { contact } from '../interfaces/contact-interface';
import { CustomSocket } from './customSocket';
import { message } from '../interfaces/message-interface';
import { ChatService } from './chat.service';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Group } from '../interfaces/group-interface';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: Socket;
  contactsBackUp: contact[];
  contacts: contact[];
  groupsBackUp: Group[];
  groups: Group[];
  waitMessages: number = 0
  constructor(private chatService: ChatService, private authService: AuthService, private usersService: UsersService) {
    this.socket = io(environment.apiURL, {transports: ['websocket']});
  }

  getUserList(): Observable<boolean>{
    return new Observable((observer) => {
        this.socket.on('user-list', (users: contact[]) => {
          this.contactsBackUp = users
          observer.next(true);
        });
    });
  }

  getGroupList(): Observable<boolean>{
    return new Observable((observer) => {
        this.socket.on('group-list', (groups: Group[]) => {
          this.groupsBackUp = groups
          observer.next(true);
        });
    });
  }

  filterUserList(query: string){    
    this.contacts = [...this.contactsBackUp]
    if(query){
      this.contacts = this.contacts.filter(d => d.name.toLowerCase().includes(query.toLowerCase()))
    }
  }

  filterGroupList(query: string){    
    this.groups = [...this.groupsBackUp]
    if(query){
      this.groups = this.groups.filter(group => group.name.toLowerCase().includes(query.toLowerCase()))
    }
  }

  getMessagee(){
    this.socket.on('inbox-message', (message: message) => {
      if(message.from === this.authService.user.uid){
        this.chatService.getLastMessages(message.to).subscribe()
      }else{
        if(message.from === this.chatService.chatSelected){
          if(this.chatService.boxChatHeight){
            this.chatService.currentChat.push(message)
          }else{
            this.waitMessages += 1
          }
        }
        if(message.to === this.chatService.chatSelected){
          if(this.chatService.boxChatHeight){
            this.chatService.currentChat.push(message)
          }else{
            this.waitMessages += 1
          }
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

  emitState(){
    this.socket.on('state', () => {
      this.socket.emit("state")
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

  updateContactList(){
    this.socket.on("update-users", () => {
      this.socket.emit("state")
    })
  }

  updateUserInfo(token: string){
    this.socket.on("user-change", () => {
      this.usersService.getUser(token);
    })
  }
}
