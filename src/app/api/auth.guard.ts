import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(this.isUserAuthenticated());
  }

  isUserAuthenticated(): boolean {
    // ideally this would check cookies or local storage for the user's toke
    // if its not there, we assume the user is anonymous
    return true;
  }

}
