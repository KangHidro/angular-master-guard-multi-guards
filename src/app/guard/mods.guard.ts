import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    try {
      console.log('ModsGuard');
      if (localStorage.getItem('role').includes('m')) {
        console.log('ModsGuard TRUE');
        return of(true);
      } else {
        console.log('ModsGuard FALSE');
        return of(false);
      }
    } catch (error) {
      console.log('ModsGuard FALSE');
      return of(false);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

}
