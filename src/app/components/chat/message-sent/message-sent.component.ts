import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
export class MessageSentComponent implements OnInit {
  
  @Input() message: any;
  @Output() doScroll = new EventEmitter<void>();
  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.socket.on("inbox-message", () => {
      setTimeout(() => {
        this.doScroll.emit()
      }, 100)
    })
  }

}
