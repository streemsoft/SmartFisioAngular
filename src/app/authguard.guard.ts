import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private router : Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(localStorage.getItem('googleAdmob')=='1v71e87vddgqee3_r3989f8m9fmw9d8mv9f84nv'
          && localStorage.getItem('googleLocation')=='_true'){
            return true;
        }else{
          this.router.navigate(['/authentication/login'])
          return false;
        }
  }
}
