import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {

  constructor(private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validateToken();
  }

  private validateToken(){
    
    const token = localStorage.getItem("token")
    if(token){
      this.authService.validateToken(token)
      .subscribe(
        (res: any) => {
          localStorage.setItem("token", res.token)
          console.log("primero");
        },
        (err) => {
          localStorage.removeItem("token")
          console.log("primero");
        }
      )
    }
    return true
  }
  
}
