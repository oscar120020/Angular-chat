import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';
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
  constructor(private chatService: ChatService, private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.socket.on("writing", ({from, writing}) => {
      this.isWriting = writing
      this.whoWrite = from
    })
  }

  select(uid: string){
    this.chatService.currentChat = []
    this.chatService.offset = 0
    this.chatService.getAllMessages(uid, this.token).subscribe(() => {
      this.chatService.$emitter.emit()
    })
  }

}
