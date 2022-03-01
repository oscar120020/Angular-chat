import { Component, Input, OnInit } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: contact;
  token = localStorage.getItem("token") ?? ""
  constructor(private chatService: ChatService) { }
  ngOnInit(): void {
  }

  select(uid: string){
    this.chatService.getAllMessages(uid, this.token)
  }

}
