import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { contact } from 'src/app/interfaces/contact-interface';
import { Group } from 'src/app/interfaces/group-interface';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() group: Group;
  token = localStorage.getItem("token") ?? ""
  isWriting: boolean;
  whoWrite: string;
  constructor(public chatService: ChatService, private socketService: SocketService, private usersService: UsersService) { }

  ngOnInit(): void {
    // this.socketService.socket.on("writing", ({from, writing}) => {
    //   this.isWriting = writing
    //   this.whoWrite = from
    // })
  }

  select(uid: string){
    this.chatService.isGroupChatSelected = true
    this.chatService.currentChat = []
    this.chatService.offsetTop = 0
    this.chatService.offsetBotton = 0
    this.chatService.getAllMessages(uid, this.token, true).subscribe(() => {
      this.chatService.$selectNewChatEmitter.emit()
      this.usersService.userActive = this.chatService.chatSelected
    })
    this.socketService.socket.emit("connect-to-group", uid)
    this.chatService.groupUsers = []
    this.getGroupUsers(uid)
  }

  getGroupUsers(uid: string){
    const group = this.socketService.groups.find((group: Group) => group.groupId === uid)
    
    if(group){
      this.chatService.groupSelected = group
    }
    for(let i = 0; i < group!.users.length; i++){
      this.usersService.getSimpleUser(this.token, group!.users[i])
      .subscribe(
        (res: any) => {
          this.chatService.groupUsers.push(res.user)
        },
        err => {
          console.log(err);          
        }
      )
    }


  }

}
