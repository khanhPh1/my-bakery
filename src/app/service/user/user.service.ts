import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { ConstantService } from '../constant/constant.service';
import { environment } from 'environments/environment';

@Injectable()
export class UserService {

  public user: any;
  constructor(private _http: HttpClient) {
    if (!this.user) {
      if (localStorage.getItem('user')) {
        this.user = JSON.parse(localStorage.getItem('user'));
      }
    }
  }

  login(username, password) {
    var url = environment.enpoint + 'user/login';
    return new Promise((resolve, reject) => {
      this._http.post<any>(url, { username: username, password: password })
        .subscribe(result => {
          if (result.status == ConstantService.responseStatus.error) {
            reject();
            return;
          }
          this.user = result.data;
          localStorage.setItem('user', JSON.stringify(this.user));
          resolve(true);
        });
    });
  }

  getUser() {
    if (!this.user) {
      if (localStorage.getItem('user')) {
        this.user = JSON.parse(localStorage.getItem('user'));
      }
    }
    return this.user;
  }

  getToken() {
    return (this.user && this.user.token) ? this.user.token : '';
  }
}
