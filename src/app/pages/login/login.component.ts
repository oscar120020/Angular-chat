import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/interfaces/auth-interfaces';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = localStorage.getItem("email")
  user: login = {
    email: this.email ? this.email : "",
    password: ''
  }
  remember: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
  }

  goToRegister(){
    this.router.navigate(["/register"])
  }

  login(){
    if(this.user.email && this.user.password){
      this.authService.login(this.user)
      .subscribe(
        (res: any) => {
          console.log(res);
          
          this.saveToken(res.token)
          this.saveEmail(this.remember, this.user.email)
          this.authService.isLoggedin = true
          this.authService.user = res.user
          this.user = {
            email: '',
            password: ''
          }
          this.router.navigate(["/"])
        },
        err => {
          const msg = err.error
          Swal.fire({
            title: "Error",
            text: msg?.msg,
            icon: "error"
          })
        }
      )
    }
  }

  saveToken(token: string){
    localStorage.setItem("token", token)
  }

  saveEmail(remember: boolean, email: string){
    if(remember) {
      localStorage.setItem("email", email)
    }
  }

}
