import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-search-message-results',
  templateUrl: './search-message-results.component.html',
  styleUrls: ['./search-message-results.component.css']
})
export class SearchMessageResultsComponent implements OnInit {

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
  }

  emitMessageclick(msgId: string){
    this.chatService.$selectMessageEmmiter.emit(msgId)
  }

}
