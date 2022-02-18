import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    return this.verifyToken()
  }

  async verifyToken(){
    const token = localStorage.getItem("token")
    if(token){
      this.authService.validateToken(token)
      .subscribe(
        (res: any) => {
          localStorage.setItem("token", res.token)
        },
        (err) => {
          localStorage.removeItem("token")
          this.router.navigate(["/login"])
        }
      )
    }else{
      this.router.navigate(["/login"])
      return false
    }
    return true
  }
  
}
