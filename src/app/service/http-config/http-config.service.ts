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
import { tap } from 'rxjs/operators';
import { NotificationService } from '../notification/notification.service';
import { LoadingService } from '../loading/loading.service';
@Injectable()
export class HttpConfigService implements HttpInterceptor {

  constructor(private _userService: UserService, private _loadingService: LoadingService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var toast = new NotificationService();

    // Clone the request to add the new header.
      const authReq = req.clone({ headers: req.headers.set("Authorization", this._userService.getToken()) });
    // req.headers.set("Authorization", this._userService.getToken());
    this._loadingService.show();

    return next.handle(authReq).pipe(
      tap(event => {
        var response = event as any;
        if (response && response.status == 200) {
          if (response.body.status == 0) {
            toast.showNotification('danger', response.body.message);
          }
        }
      }, error => {
        toast.showNotification('danger', error.message);
        this._loadingService.hide();
      }, () => {
        this._loadingService.hide();
      })
    )

  }
}