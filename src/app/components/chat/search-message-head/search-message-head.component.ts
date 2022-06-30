import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-search-message-head',
  templateUrl: './search-message-head.component.html',
  styleUrls: ['./search-message-head.component.css']
})
export class SearchMessageHeadComponent implements OnInit {

  constructor(private usersService: UsersService, private chatService: ChatService) { }

  ngOnInit(): void {
  }
  
  closeSearch(){
    this.usersService.isOpenSearchMessage = false
    this.chatService.searchMessagesList = []
  }
}
