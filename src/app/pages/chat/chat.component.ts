import { Component, OnInit } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  contacts: contact[];
  token = localStorage.getItem("token") ?? ""
  constructor(public socketService: SocketService, private authService: AuthService, public chatService: ChatService) {}
  
  ngOnInit(): void {
    this.socketService.connect()
    this.socketService.emitMainConnection(this.token)
    this.socketService.getUserList(this.authService.user.uid).subscribe(() => {
      this.socketService.filterUserList(this.chatService.query)
    })
    this.socketService.getMessagee()
  }


}
