import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import {
  AgmCoreModule
} from '@agm/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './page/login/login.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AuthService } from './service/auth/auth.service';
import { UserService } from './service/user/user.service';
import { LoadingService } from './service/loading/loading.service';
import { HttpConfigService } from './service/http-config/http-config.service';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    ToastModule.forRoot(),
    AdminLayoutModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
  ],
  providers: [
    AuthService,
    UserService,
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
