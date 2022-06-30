import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-box-contact',
  templateUrl: './box-contact.component.html',
  styleUrls: ['./box-contact.component.css']
})
export class BoxContactComponent implements OnInit {
  constructor(public socketService: SocketService) { }
  ngOnInit(): void {
  }

}
