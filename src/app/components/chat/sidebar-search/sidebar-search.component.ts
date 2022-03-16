import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrls: ['./sidebar-search.component.css']
})
export class SidebarSearchComponent implements OnInit {
  
  search: string;
  constructor(private socketService: SocketService, private chatService: ChatService) { }

  ngOnInit(): void {
  }

  inputChange(element: string){
    this.chatService.query = element
    this.socketService.filterUserList(element)
  }

}
