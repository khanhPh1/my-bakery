import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { LoadingService } from './service/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent {
  loading = false;
  constructor(private _loadingService: LoadingService){
    this._loadingService.loading.subscribe(data => {
      this.loading = data;
    });
  }
}
