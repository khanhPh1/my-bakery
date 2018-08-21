import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { HttpResponse } from 'selenium-webdriver/http';
@Injectable()
export class loadService implements HttpInterceptor {
  constructor(private user: UserService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `${this.user.getToken()}`
      }
    });
    // this.spinnerService.start();
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => { 
        if (event instanceof HttpResponse) {
        }
      },
        (err: any) => {
      }));
        
  }
}