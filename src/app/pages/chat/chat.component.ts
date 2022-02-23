import { Component, OnInit } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  contacts: contact[];

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.connect()
    this.socketService.getUserList().subscribe((data: contact[]) => {
      this.contacts = data
    })
  }

}
