import { Component, Input, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrls: ['./sidebar-search.component.css']
})
export class SidebarSearchComponent implements OnInit {
  
  search: string;
  constructor(private socketService: SocketService, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  inputChange(element: string){
    this.usersService.query = element
    this.socketService.filterUserList(element)
  }

}
