import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationService } from '../../service/notification.service'
import { UserService } from '../../service/user.service';
import { AuthService } from '../../service/auth.service';
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
  noti: any;
  userService: any;
  constructor(noti: NotificationService, user: UserService, private router: Router) {
    this.noti = noti;
    this.userService = user;
  }
  ngOnInit() {
    if (this.userService.getUser()) {
      this.router.navigate(['orders']);
    }
  }

  login() {
    if (!this.loginForm.valid) {
      this.noti.showNotification('danger', 'All fields is required');
      return;
    }
    this.userService.login(this.loginForm.value.username, this.loginForm.value.password).then(data => {
      this.router.navigate(['orders']);
    }).catch(err => {
      console.log(err);
    });
  }
}
