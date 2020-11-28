import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  protected URL = environment.API_URL;
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const endpoint = `${this.URL}${req.url}`; // https://....com/posts
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ url: endpoint, headers: req.headers.set('Content-Type', 'application/json')});
    }
    /* When you wanna make an authenticate request
    * const token = getToken();
    * if (token) {
    *   req = req.clone({ url, headers: req.headers.set('Authorization', `Bearer ${token}`)});
    * }
    * */
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}
