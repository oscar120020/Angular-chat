import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  searchContacts: string = "";
  constructor(public usersService: UsersService, public authService: AuthService, private socketService: SocketService) { }

  ngOnInit(): void {
  }
  
  handleBack(){
    this.usersService.$openSolicitud.emit(false)
    this.usersService.isSearching = false
    this.searchContacts = ""
  }

  handleInputchange(name: string){
    this.searchContacts = name
    if(name){
      this.usersService.getFoundUsers(name, localStorage.getItem("token") ?? "")
      .subscribe(
        (res: any) => {
          this.usersService.foundedUsers = res.result
          this.usersService.isSearching = true
        },
        (err) => {
          console.log(err);
          
        }
      )
    }else{
      this.usersService.isSearching = false
    }
  }

  addFriend(user: string, uid: string){
    this.usersService.addFriend(uid, user, localStorage.getItem("token") ?? "")
    .subscribe(
      (res: any) => {
        this.authService.user = res.user
        this.socketService.socket.emit("state")
        this.socketService.socket.emit("update-users", {to: uid})
      },
      err => {
        console.log(err);
        
      }
    )
  }
}
