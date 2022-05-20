import { Component, OnInit } from '@angular/core';
import { NameResponse } from 'src/app/interfaces/auth-interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  
  userName: string;
  msgError: string;
  constructor(private autnService: AuthService) { }

  ngOnInit(): void {
  }

  sendUserName(){
    if(this.userName){
      this.autnService.updateUserName(this.userName, localStorage.getItem("token") ?? "")
      .subscribe(
        (res: any) => {
          const response: NameResponse = res
          this.autnService.user = response.response
        },
        (err) => {
          this.msgError = err.error.msg
        }
      )
    }
  }

}
