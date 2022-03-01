import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-box-chat',
  templateUrl: './box-chat.component.html',
  styleUrls: ['./box-chat.component.css']
})
export class BoxChatComponent implements OnInit {

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
    console.log("box");
  }

  scroll(){
    const box = document.querySelector(".messages")
    let height = box!.scrollHeight;
    if(height){
      box!.scrollTop = height
    }
  }

}
