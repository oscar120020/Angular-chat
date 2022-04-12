import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {
  
  @Input() message: any;
  constructor() { }

  ngOnInit(): void {
  }

}
