import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contact } from 'src/app/interfaces/contact-interface';
import { AuthService } from 'src/app/services/auth.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-sidebar-info',
  templateUrl: './sidebar-info.component.html',
  styleUrls: ['./sidebar-info.component.css']
})
export class SidebarInfoComponent implements OnInit {
  
  user: contact;
  constructor(private authService: AuthService, private router: Router, private socketService: SocketService) {}
  
  ngOnInit(): void {
    this.user = this.authService.user
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigate(["/login"])
    this.socketService.disconnect()
  }

}
