import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(): boolean | Observable<boolean>{
    if(localStorage.getItem("token")){
      return true;
    }
    this.router.navigateByUrl('/login');
    return true;
  }

  constructor(private router: Router) { }
}
