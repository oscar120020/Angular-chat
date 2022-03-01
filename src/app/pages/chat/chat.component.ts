import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
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
  constructor(private socketService: SocketService, private authService: AuthService, public chatService: ChatService) {}

  ngOnInit(): void {
    this.socketService.connect()
    this.socketService.emitMainConnection(this.token)
    this.socketService.getUserList().subscribe((data: contact[]) => {
      this.contacts = data.filter(d => d.uid !== this.authService.user.uid)
    })
    console.log("aja");
    
    this.socketService.getMessagee()
  }

}
