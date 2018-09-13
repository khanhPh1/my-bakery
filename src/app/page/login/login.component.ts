import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationService } from '../../service/notification/notification.service'
import { UserService } from '../../service/user/user.service';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NotificationService, UserService, AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _toast: NotificationService, private _userService: UserService, private _router: Router) {
  }
  ngOnInit() {
    if (this._userService.getUser()) {
      this._router.navigate(['orders']);
    }
  }

  login() {
    if (!this.loginForm.valid) {
      this._toast.showNotification('danger', 'All fields is required');
      return;
    }
    this._userService.login(this.loginForm.value.username, this.loginForm.value.password)
      .then(data => {
        this._router.navigate(['orders']);
      });
  }
}
