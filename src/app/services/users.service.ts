import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  query: string = "";
  isOpenSearchMessage = false
  userActive: string;
  constructor() { }
}
