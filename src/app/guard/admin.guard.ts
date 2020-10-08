import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    try {
      console.log('AdminGuard');
      if (localStorage.getItem('role').includes('a')) {
        console.log('AdminGuard TRUE');
        return of(true);
      } else {
        console.log('AdminGuard FALSE');
        return of(false);
      }
    } catch (error) {
      console.log('AdminGuard FALSE');
      return of(false);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

}
