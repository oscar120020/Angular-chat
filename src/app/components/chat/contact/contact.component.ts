import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';
import { BoxChatComponent } from '../box-chat/box-chat.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: contact;
  token = localStorage.getItem("token") ?? ""
  isWriting: boolean;
  whoWrite: string;
  constructor(public chatService: ChatService, private socketService: SocketService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.socketService.socket.on("writing", ({from, writing}) => {
      this.isWriting = writing
      this.whoWrite = from
    })
  }

  select(uid: string){
    this.chatService.currentChat = []
    this.chatService.offsetTop = 0
    this.chatService.offsetBotton = 0
    this.chatService.getAllMessages(uid, this.token, true).subscribe(() => {
      this.chatService.$selectNewChatEmitter.emit()
      this.usersService.userActive = this.chatService.chatSelected
    })
  }

}
