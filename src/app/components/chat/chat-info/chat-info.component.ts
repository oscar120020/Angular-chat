import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ErrorResponse } from 'src/app/interfaces/auth-interfaces';
import { contact } from 'src/app/interfaces/contact-interface';
import { NameForm, PasswordForm } from 'src/app/interfaces/form-interfaces';
import { Group } from 'src/app/interfaces/group-interface';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.css']
})
export class ChatInfoComponent implements OnInit {
  
  image: File;
  changeName: boolean = false
  changePassword: boolean = false
  errorMessage: string = ""
  constructor(private usersService: UsersService, public authService: AuthService, public chatService: ChatService) { }

  ngOnInit(): void {
  }

  handleBack(){
      this.usersService.isOpenChatInfo = false
  }

  handleImage(event: any){
    const file: File = event.target!.files[0]
    const formData = new FormData()
    formData.set("image", file)

    this.usersService.changeGroupPerfil(formData, this.chatService.groupSelected.groupId, localStorage.getItem("token") ?? "")
    .subscribe(
      (result: Group) => {
        this.chatService.chatUser = result
        this.chatService.groupSelected = result
      },
      (err) => {
        Swal.fire(err.error.msg)
      }
    )
  }

}
