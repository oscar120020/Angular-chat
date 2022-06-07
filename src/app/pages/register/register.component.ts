import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'src/app/interfaces/auth-interfaces';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: register = {
    name: '',
    email: '',
    password: ''
  }
  isLoading: boolean = false
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  goToLogin(){
    this.router.navigate(["/login"])
  }

  register(){
    this.isLoading = true
    if(this.user.email && this.user.name && this.user.password){
      this.authService.register(this.user)
      .subscribe(
        (res: any) => {
          localStorage.setItem("token", res.token)
          this.authService.isLoggedin = true
          this.authService.user = res.user
          this.user = {
            name: '',
            email: '',
            password: ''
          }
          this.isLoading = false
          this.router.navigate(["/"])
        },
        err => {
          const msg = err.error
          this.isLoading = false
          Swal.fire({
            title: "Error",
            text: msg?.msg,
            icon: "error"
          })
        }
      )
    }
  }

}
