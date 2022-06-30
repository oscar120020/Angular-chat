import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ErrorResponse } from 'src/app/interfaces/auth-interfaces';
import { contact } from 'src/app/interfaces/contact-interface';
import { NameForm, PasswordForm } from 'src/app/interfaces/form-interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  image: File;
  changeName: boolean = false
  changePassword: boolean = false
  errorMessage: string = ""
  constructor(private usersService: UsersService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  handleBack(){
    this.usersService.$openPerfil.emit(false)
  }

  handleImage(event: any){
    const file: File = event.target!.files[0]
    const formData = new FormData()
    formData.set("image", file)

    this.usersService.changeImagePerfil(formData, this.authService.user.uid, localStorage.getItem("token") ?? "")
    .subscribe(
      (result: contact) => {
        this.authService.user = result
      },
      (err) => {
        Swal.fire(err.error.msg)
      }
    )
  }

  handleHide(firstElement: HTMLElement, secondElement: HTMLElement){
    firstElement!.style.transform = "translateX(-150%)"
    setTimeout(() => {
      firstElement!.style.display = "none"
      secondElement!.style.display = "flex"
    }, 350)
    setTimeout(() => {
      secondElement!.style.transform = "translateX(0)"
    }, 400)
  }

  handleShow(firstElement: HTMLElement, secondElement: HTMLElement){
    secondElement!.style.transform = "translateX(-150%)"
    setTimeout(() => {
      secondElement!.style.display = "none"
      firstElement!.style.display = "flex"
    }, 350)
    setTimeout(() => {
      firstElement!.style.transform = "translateX(0)"
    }, 400)
  }

  handleSubmitName(event: NgForm, firstElement: HTMLElement, secondElement: HTMLElement){
    const {name}: NameForm = event.form.value
    if(name){
      this.usersService.UpdateName(name, this.authService.user.uid, localStorage.getItem("token") ?? "")
      .subscribe((result: contact) => {
        this.authService.user = result
        this.handleShow(firstElement, secondElement)
        event.resetForm({name: ""})
        Swal.fire('Nombre actualizado con exito!')
      })
    }
  }

  handleSubmitPassword(event: NgForm, firstElement: HTMLElement, secondElement: HTMLElement){
    const { newPassword, currentPassword }: PasswordForm = event.form.value
    if(currentPassword && newPassword){
      this.usersService.UpdatePassword(currentPassword, newPassword, this.authService.user.uid, localStorage.getItem("token") ?? "")
      .subscribe(
        (result: contact) => {
          this.handleShow(firstElement, secondElement)
          event.resetForm({newPassword: "", currentPassword: ""})
          Swal.fire('Contraseña actualizada con exito!')
        },
        (err) => {
          const error: ErrorResponse = err.error
          this.errorMessage = error.msg
        }
      )
    }
  }

  

}
