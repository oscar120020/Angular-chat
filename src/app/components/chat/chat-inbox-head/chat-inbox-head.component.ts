import { Component, Input, OnInit } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-inbox-head',
  templateUrl: './chat-inbox-head.component.html',
  styleUrls: ['./chat-inbox-head.component.css']
})
export class ChatInboxHeadComponent implements OnInit {

  @Input() chatUserInfo: contact;
  constructor() { }

  ngOnInit(): void {
  }

}
