import { Component, Input, OnInit } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';
import { Group } from 'src/app/interfaces/group-interface';
import { ChatService } from 'src/app/services/chat.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-chat-inbox-head',
  templateUrl: './chat-inbox-head.component.html',
  styleUrls: ['./chat-inbox-head.component.css']
})
export class ChatInboxHeadComponent implements OnInit {

  @Input() chatUserInfo: contact | Group;
  constructor(private usersService: UsersService, public chatService: ChatService) { }

  ngOnInit(): void {
  }

  openSearch(){
    this.usersService.isOpenSearchMessage = true
  }

  cleanChat(){
    this.chatService.currentChat = []
    this.chatService.chatSelected = "" 
  }

  openchatInfo(){
    this.usersService.isOpenChatInfo = true
  }

}
