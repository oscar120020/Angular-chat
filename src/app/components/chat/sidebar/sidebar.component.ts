import { Component, Input, OnInit } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Input() contacts: contact[];
  constructor() { }

  ngOnInit(): void {
  }

}
