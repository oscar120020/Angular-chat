import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.verifyToken();
  }

  verifyToken(): Observable<boolean> | boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return new Observable((observer) => {
        this.authService.validateToken(token).subscribe(
          (res: any) => {
            localStorage.setItem('token', res.token);
            this.authService.isLoggedin = true;
            this.authService.user = res.user
            observer.next(true)
          },
          (err) => {
            localStorage.removeItem('token');
            this.router.navigate(["/login"])
            observer.next(false)
          }
        );
      });
    } else {
      this.router.navigate(["/login"])
      return false;
    }
  }
}
