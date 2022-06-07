import { Component, OnInit } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  contacts: contact[];
  token = localStorage.getItem('token') ?? '';
  
  constructor(
    public socketService: SocketService,
    public authService: AuthService,
    public chatService: ChatService,
    public usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.socketService.connect();
    this.socketService.emitState();
    this.socketService.updateContactList();
    this.socketService.updateUserInfo(localStorage.getItem("token") ?? "");
    this.socketService.emitMainConnection(this.token);
    this.socketService.getUserList().subscribe(() => {
      this.socketService.filterUserList(this.usersService.query);
    });
    this.socketService.getGroupList().subscribe(() => {
      this.socketService.filterGroupList(this.usersService.query);
    });
    this.socketService.getMessagee();
    this.openPerfil()
    this.openSolicitud()
    this.openGroup()
    this.resezeFunction()
  }

  resezeFunction(){
    if(window.innerWidth <= 630){
      this.chatService.oneScreen = true
    }
  }

  openPerfil(){
    this.usersService.$openPerfil.subscribe((value) => {
      const perfilBox = document.querySelector<HTMLElement>(".perfil")
      if(value){
        perfilBox!.style.transform = "translateX(0)"
      }else{
        perfilBox!.style.transform = "translateX(-100%)"
      }
      
    })
  }

  openSolicitud(){
    this.usersService.$openSolicitud.subscribe((value) => {
      const solicitudBox = document.querySelector<HTMLElement>(".solicitud")
      if(value){
        solicitudBox!.style.transform = "translateX(0)"
      }else{
        solicitudBox!.style.transform = "translateX(-100%)"
      }
      
    })
  }

  openGroup(){
    this.usersService.$openCreateGroup.subscribe((value) => {
      const groupBox = document.querySelector<HTMLElement>(".group")
      if(value){
        groupBox!.style.transform = "translateX(0)"
      }else{
        groupBox!.style.transform = "translateX(-100%)"
      }
    })
  }
  
}
