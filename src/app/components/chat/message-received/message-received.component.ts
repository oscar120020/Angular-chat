import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-message-received',
  templateUrl: './message-received.component.html',
  styleUrls: ['./message-received.component.css']
})
export class MessageReceivedComponent implements OnInit {
  
  @Input() message: any;
  @Output() doScroll = new EventEmitter<void>();
  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.socket.on("inbox-message", () => {
      setTimeout(() => {
        this.doScroll.emit()
      }, 100)
    })
  }

}
