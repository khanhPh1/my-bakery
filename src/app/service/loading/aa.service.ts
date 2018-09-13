import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from 'selenium-webdriver/http';
import { UserService } from '../user/user.service';
@Injectable()
export class loadService implements HttpInterceptor {
  constructor(private _userService: UserService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `${this._userService.getToken()}`
      }
    });
    // this.spinnerService.start();
    return next.handle(request);
  }

  
}