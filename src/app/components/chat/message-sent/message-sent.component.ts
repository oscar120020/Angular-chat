import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { message } from 'src/app/interfaces/message-interface';

@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
export class MessageSentComponent implements OnInit {
  
  @Input() message: any;
  @Output() doScroll = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {
    this.doScroll.emit()
  }

}
