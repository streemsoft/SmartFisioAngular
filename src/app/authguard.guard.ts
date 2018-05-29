import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private router : Router, private fire : FirebaseService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(localStorage.getItem('googleAdmob')==this.fire.firebaseui){
            return true;
        }else{
          this.router.navigate(['/authentication/login'])
          return false;
        }
  }
}
