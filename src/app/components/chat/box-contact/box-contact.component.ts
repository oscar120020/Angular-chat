import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-contact',
  templateUrl: './box-contact.component.html',
  styleUrls: ['./box-contact.component.css']
})
export class BoxContactComponent implements OnInit {

  constructor() { }
  data: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  ngOnInit(): void {
  }

}
