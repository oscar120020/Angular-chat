import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contact } from 'src/app/interfaces/contact-interface';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebar-info',
  templateUrl: './sidebar-info.component.html',
  styleUrls: ['./sidebar-info.component.css'],
})
export class SidebarInfoComponent implements OnInit {
  user: contact;
  isOptionsActive: boolean = false
  constructor(
    private authService: AuthService,
    private router: Router,
    private socketService: SocketService,
    private chatService: ChatService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.socketService.disconnect();
    this.authService.user = {
      email: '',
      name: '',
      online: false,
      uid: '',
    };
    this.chatService.currentChat = []
    this.chatService.chatSelected = ""
  }

  handleOptions(){
    this.isOptionsActive = !this.isOptionsActive
  }

  handlePerfil(){
    this.usersService.$openPerfil.emit(true)
    this.handleOptions()
  }

}
