import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthService implements CanActivate {

  constructor(private _userService: UserService, private _router: Router) { }

  canActivate(): boolean {

    if (!this._userService.getUser()) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }

}
