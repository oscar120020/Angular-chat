import { Component, Input, OnInit } from '@angular/core';
import { message } from 'src/app/interfaces/message-interface';

@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
export class MessageSentComponent implements OnInit {
  
  @Input() message: any;
  constructor() { }

  ngOnInit(): void {
  }

}
