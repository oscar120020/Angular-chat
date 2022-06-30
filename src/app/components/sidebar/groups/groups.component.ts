import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit, AfterViewInit {
  
  peopleGroup: string[] = [];
  groupName: string;
  constructor(public usersService: UsersService, public socketService: SocketService, private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.handleFocus()
  }
  
  handleFocus(){
    const inputElement = document.querySelector<HTMLElement>(".input");
    const boxInputElement = document.querySelector<HTMLElement>(".inbut-box");
    
    inputElement?.addEventListener("focus", () => {
      boxInputElement!.style.borderBottom = "1px solid #005c4b"
    })

    inputElement?.addEventListener("focusout", () =>{
      boxInputElement!.style.borderBottom = "1px solid #202c33"
    })
  }

  handleBack(){
    this.usersService.$openCreateGroup.emit(false)
  }

  selectFriend(friendId: string, element: MouseEvent){
    let iconElement: any = element.target;
    
    if(this.peopleGroup.includes(friendId)){
      iconElement.style.color = "#fff"
      this.peopleGroup = this.peopleGroup.filter((friend:string) => friend !== friendId)
    }else{
      iconElement.style.color = "#005c4b"
      this.peopleGroup.push(friendId)
    }
  }
  
  createGroup(){
    if(this.groupName && this.peopleGroup.length > 0){
      this.peopleGroup.push(this.authService.user.uid)
      this.usersService.createGroup(this.groupName, this.peopleGroup, localStorage.getItem("token") ?? "")
      .subscribe(
        (res: any) => {
          this.socketService.socket.emit("state")
        },
        err => {
          console.log(err);
        }
      )
    }
  }

}
