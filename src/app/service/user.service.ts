import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantService } from './constant.service';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class UserService {

  public user: any;
  http: any;
  constructor(http: HttpClient) {
    this.http = http;
  }

  login(username, password) {
    var url = ConstantService.SERVER_URL + 'user/login';
    return new Promise((resolve, reject) => {
      this.http.post(url, { username: username, password: password })
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
    return this.user.token;
  }
}
