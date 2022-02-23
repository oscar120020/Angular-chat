import { Component, Input, OnInit } from '@angular/core';
import { contact } from 'src/app/interfaces/contact-interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: contact;
  constructor() { }
  ngOnInit(): void {
  }

}
