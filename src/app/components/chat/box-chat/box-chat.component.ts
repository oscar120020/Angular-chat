import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-chat',
  templateUrl: './box-chat.component.html',
  styleUrls: ['./box-chat.component.css']
})
export class BoxChatComponent implements OnInit {

  constructor() { }

  messages: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  ngOnInit(): void {
  }

}
