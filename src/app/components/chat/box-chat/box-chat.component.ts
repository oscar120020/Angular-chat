import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-box-chat',
  templateUrl: './box-chat.component.html',
  styleUrls: ['./box-chat.component.css']
})
export class BoxChatComponent implements OnInit {

  constructor(public chatService: ChatService, public usersService: UsersService, public socketService: SocketService) {}

  currentScroll:any;
  lastChild: any;
  elementToScroll: any;
  // isUserActive: boolean = this.chatService.chatSelected === this.usersService.userActive
  ngOnInit(): void {
    const box = document.querySelector<HTMLElement>(".messages")
    box?.addEventListener("scroll", () => {
      this.updateMessages(box)
      // console.log(box!.scrollTop);
      if((box!.scrollHeight - 872) === box!.scrollTop){
        this.chatService.boxChatHeight = true
      }else{
        this.chatService.boxChatHeight = false
      }
      
    })
    this.chatSelected()
    this.chatService.$selectMessageEmmiter.subscribe((msgId) => {
      this.messageSelected(msgId);
    })
  }

  doScroll(){
    const box = document.querySelector<HTMLElement>(".messages")
    box!.style.scrollBehavior = "smooth"
    let height = box!.scrollHeight;
    if(height){
      box!.scrollTop = height - 872
    }
  }

  updateMessages(target: HTMLElement){
    if(target!.scrollTop === 0 && this.chatService.chatSelected === this.usersService.userActive){
      this.scrollToTop(target)
    }
    if(target!.scrollTop === (target!.scrollHeight - 872) && this.chatService.chatSelected === this.usersService.userActive){
      this.scrollToBotton()
    }
  }

  scrollToTop(target:HTMLElement){
    this.lastChild = target.firstElementChild
      this.chatService.offsetTop += 20 
      this.chatService.getAllMessages(this.chatService.chatSelected, localStorage.getItem("token") ?? "", true)
      .subscribe(() => {
        target.style.scrollBehavior = "initial"
        setTimeout(() => {
          target!.scrollTop = this.lastChild.offsetTop - 48
        }, 0)
      })
  }

  scrollToBotton(){
    if(this.chatService.offsetBotton > 0){
      this.chatService.offsetBotton -= 20
      this.chatService.getAllMessages(this.chatService.chatSelected, localStorage.getItem("token") ?? "", false)
      .subscribe()
    }
  }

  chatSelected(){
    this.chatService.$selectNewChatEmitter.subscribe(() => {
      setTimeout(() => {
        this.doScroll()
      }, 200)
    })
  }

  messageSelected(idMsg: string){
    const box = document.querySelector<HTMLElement>(".messages")
    this.chatService.getMessagePosition(this.chatService.chatSelected, localStorage.getItem("token") ?? "", idMsg)
    .subscribe(() => {
      this.chatService.getAllMessages(this.chatService.chatSelected, localStorage.getItem("token") ?? "", true, idMsg)
      .subscribe(() => {
        setTimeout(() => {
          box!.childNodes.forEach((child: any) => {
            if(child.id === idMsg){
              box!.scrollTop = child.offsetTop - 48
              child.style.backgroundColor = "#4a99579a"
              setTimeout(() => {
                child.style.backgroundColor = "#ffffff00"
              }, 2000)
            }
          })
        }, 0)
      })
    })
  }

  pendingMessages(){
    this.socketService.waitMessages = 0
    this.chatService.getLastMessages(this.chatService.chatSelected)
    .subscribe(() => {
      this.doScroll()
    })
  }

}
