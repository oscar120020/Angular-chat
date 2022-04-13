import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  query: string = "";
  isOpenSearchMessage = false
  userActive: string;
  $openPerfil = new EventEmitter()
  constructor() { }
}
