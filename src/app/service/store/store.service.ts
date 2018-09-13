import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { ConstantService } from '../constant/constant.service';
import { environment } from 'environments/environment';
@Injectable()
export class StoreService {

  public user: any;
  http: any;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getList() {
    var url = environment.enpoint + 'store/getlist';
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
    return this.user.token ? this.user.token : '';
  }
}
