import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantService } from './constant.service';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class StoreService {

  public user: any;
  http: any;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getList() {
    var url = ConstantService.SERVER_URL + 'store/getlist';
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(result => {
          if (result.status == ConstantService.responseStatus.error) {
            reject();
            return;
          }
          resolve(result.data);
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
