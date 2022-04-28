import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-box-chat',
  templateUrl: './box-chat.component.html',
  styleUrls: ['./box-chat.component.css']
})
export class BoxChatComponent implements AfterViewInit, OnInit {

  constructor(public chatService: ChatService, public usersService: UsersService, public socketService: SocketService) {}

  currentScroll:any;
  lastChild: any;
  elementToScroll: any;
  @ViewChild("messageBox") messageBox: ElementRef

  ngOnInit(): void {
    this.chatService.$selectNewChatEmitter.subscribe(() => {
      setTimeout(() => {
        this.doScroll()
      }, 300)
    })
  }
  
  ngAfterViewInit(): void {
    this.messageBox.nativeElement.addEventListener("scroll", () => {
      this.updateMessages(this.messageBox.nativeElement)
      if((this.messageBox.nativeElement.scrollHeight - 1000) < this.messageBox.nativeElement.scrollTop){
        this.chatService.boxChatHeight = true
      }else{
        this.chatService.boxChatHeight = false
      }
      
    })
    this.chatService.$selectMessageEmmiter.subscribe((msgId) => {
      this.usersService.isOpenSearchMessage = false
      setTimeout(() => {
        this.messageSelected(msgId);
      }, 300)
    })
  }

  doScroll(){
    this.messageBox.nativeElement.style.scrollBehavior = "smooth"
    let height = this.messageBox.nativeElement.scrollHeight;
    if(height){
      this.messageBox.nativeElement.scrollTop = height
    }
  }

  updateMessages(target: HTMLElement){
    if(target!.scrollTop === 0 && this.chatService.chatSelected === this.usersService.userActive){
      this.scrollToTop(target)
    }
    if(target!.scrollTop > (target!.scrollHeight - 1000) && this.chatService.chatSelected === this.usersService.userActive){
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
    if(this.chatService.offsetBotton > 0 || this.socketService.waitMessages){
      if(this.socketService.waitMessages){
        this.chatService.getLastMessages(this.chatService.chatSelected)
        .subscribe(() => {
          this.socketService.waitMessages = 0
        })
      }else{
        this.chatService.offsetBotton -= 20
        this.chatService.getAllMessages(this.chatService.chatSelected, localStorage.getItem("token") ?? "", false)
        .subscribe()
      }
    }
  }

  messageSelected(idMsg: string){
    this.chatService.getMessagePosition(this.chatService.chatSelected, localStorage.getItem("token") ?? "", idMsg)
    .subscribe(() => {
      this.chatService.getAllMessages(this.chatService.chatSelected, localStorage.getItem("token") ?? "", true, idMsg)
      .subscribe(() => {
        setTimeout(() => {
          this.messageBox.nativeElement.childNodes.forEach((child: any) => {
            if(child.id === idMsg){
              this.messageBox.nativeElement.scrollTop = child.offsetTop - 48
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
