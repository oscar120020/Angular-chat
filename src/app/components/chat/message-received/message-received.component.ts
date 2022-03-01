import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-received',
  templateUrl: './message-received.component.html',
  styleUrls: ['./message-received.component.css']
})
export class MessageReceivedComponent implements OnInit {
  
  @Input() message: any;
  constructor() { }

  ngOnInit(): void {
  }

}
