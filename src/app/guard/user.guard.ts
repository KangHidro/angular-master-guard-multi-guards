import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    try {
      console.log('UserGuard');
      if (localStorage.getItem('role').includes('u')) {
        console.log('UserGuard TRUE');
        return of(true);
      } else {
        console.log('UserGuard FALSE');
        return of(false);
      }
    } catch (error) {
      console.log('UserGuard FALSE');
      return of(false);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

}
