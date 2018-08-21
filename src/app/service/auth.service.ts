import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
@Injectable()
export class AuthService implements CanActivate {

  constructor(private userService: UserService, public router: Router) { }

  canActivate(): boolean {

    if (!this.userService.getUser()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
