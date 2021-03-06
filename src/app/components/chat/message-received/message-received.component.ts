import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupPeople } from 'src/app/interfaces/group-interface';
import { message } from 'src/app/interfaces/message-interface';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-message-received',
  templateUrl: './message-received.component.html',
  styleUrls: ['./message-received.component.css']
})
export class MessageReceivedComponent implements OnInit {
  
  @Input() message: message;
  @Input() group: boolean;
  @Output() doScroll = new EventEmitter<void>();
  userData: GroupPeople;
  constructor(private socketService: SocketService, private chatService: ChatService) { }

  ngOnInit(): void {
    this.socketService.socket.on("inbox-message", () => {
      if(this.chatService.boxChatHeight){
        setTimeout(() => {
          this.doScroll.emit()
        }, 100)
      }
    })
    this.getUserData()
  }

  getUserData(){
    this.userData = this.chatService.groupUsers.find((user: GroupPeople) => user.id === this.message.from)
  }
}
