import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable()
export class CustomSocket extends Socket{
  // constructor(){
  //   super({url: "http://localhost:8080", options: {
  //     transports: ["websocket"],
  //     query: {
  //       "x-token": localStorage.getItem("token")
  //     }
  //     }
  //   }) 
  // }
}