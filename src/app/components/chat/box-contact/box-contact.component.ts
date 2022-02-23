import { Component, Input, OnInit } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';

@Component({
  selector: 'app-box-contact',
  templateUrl: './box-contact.component.html',
  styleUrls: ['./box-contact.component.css']
})
export class BoxContactComponent implements OnInit {

  @Input() contacts: contact[];
  constructor() { }
  ngOnInit(): void {
  }

}
