import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-search-message-form',
  templateUrl: './search-message-form.component.html',
  styleUrls: ['./search-message-form.component.css']
})
export class SearchMessageFormComponent implements OnInit {

  search: string;
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  inputChange(element: string){
    this.chatService.getFoundMessages(this.chatService.chatSelected, localStorage.getItem("token") ?? "", element)
    .subscribe()
  }

}
