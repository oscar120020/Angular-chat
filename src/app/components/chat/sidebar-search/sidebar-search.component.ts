import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrls: ['./sidebar-search.component.css']
})
export class SidebarSearchComponent implements OnInit {
  
  search: string;
  constructor(private socketService: SocketService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  inputChange(element: string){
    this.socketService.filterUserList(element)
  }

}
