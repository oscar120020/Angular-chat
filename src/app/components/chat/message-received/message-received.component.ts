import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-message-received',
  templateUrl: './message-received.component.html',
  styleUrls: ['./message-received.component.css']
})
export class MessageReceivedComponent implements OnInit {
  
  @Input() message: any;
  @Output() doScroll = new EventEmitter<void>();
  constructor(private socketService: SocketService, private chatService: ChatService) { }

  ngOnInit(): void {
    this.socketService.socket.on("inbox-message", () => {
      if(this.chatService.boxChatHeight){
        setTimeout(() => {
          this.doScroll.emit()
        }, 100)
      }
    })
  }
}
