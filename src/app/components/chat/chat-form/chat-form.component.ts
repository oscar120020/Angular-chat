import { Component, OnInit } from '@angular/core';
import { message } from 'src/app/interfaces/message-interface';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  
  message: string = "";
  constructor(private socketService: SocketService, private chatService: ChatService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  enviar(){
    if(this.message){
      const payload: message = {
        to: this.chatService.chatSelected,
        from: this.authService.user.uid,
        message: this.message
      }
      this.socketService.emitMessage(payload)
      this.message = ""
    }
  }

}
