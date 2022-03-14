import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-box-chat',
  templateUrl: './box-chat.component.html',
  styleUrls: ['./box-chat.component.css']
})
export class BoxChatComponent implements OnInit {

  constructor(public chatService: ChatService) { 
  }
  currentScroll:any;

  ngOnInit(): void {
    const box = document.querySelector(".messages")
    box!.addEventListener("scroll", () => {
      if(box!.scrollTop === 0){
        // traer nuevos mensajes
        this.chatService.offset+=10
        this.chatService.getAllMessages(this.chatService.chatSelected, localStorage.getItem("token") ?? "")
      }
    })
    this.chatService.$emitter.subscribe(() => {
      setTimeout(() => {
        this.scroll()
      }, 200)
    })
  }

  scroll(){
    console.log("hace scroll");
    
    const box = document.querySelector(".messages")
    let height = box!.scrollHeight;
    if(height){
      box!.scrollTop = height
    }
  }

}
