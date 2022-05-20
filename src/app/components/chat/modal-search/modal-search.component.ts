import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.css']
})
export class ModalSearchComponent implements OnInit {
  
  @Input() searchContacts: string
  constructor(public usersService: UsersService, private socketService: SocketService) { }

  ngOnInit(): void {
  }


  sendRequest(uid: string){
    this.usersService.sendRequest(uid, localStorage.getItem("token") ?? "")
    .subscribe(
      res => {
        console.log(res);
        this.usersService.getFoundUsers(this.searchContacts, localStorage.getItem("token") ?? "")
        .subscribe(
          (res: any) => {
            this.usersService.foundedUsers = res.result
            this.socketService.socket.emit("user-change", {to: uid})
          },
          err => {
            console.log(err);
            
          }
        )
      },
      err => {
        console.log(err);
        
      }
    )
  }

}
