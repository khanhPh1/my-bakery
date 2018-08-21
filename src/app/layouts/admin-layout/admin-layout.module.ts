import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../page/dashboard/dashboard.component';
import { UserProfileComponent } from '../../page/user-profile/user-profile.component';
import { TableListComponent } from '../../page/table-list/table-list.component';
import { TypographyComponent } from '../../page/typography/typography.component';
import { IconsComponent } from '../../page/icons/icons.component';
import { MapsComponent } from '../../page/maps/maps.component';
import { NotificationsComponent } from '../../page/notifications/notifications.component';
import { UpgradeComponent } from '../../page/upgrade/upgrade.component';
import { OrdersComponent } from '../../page/orders/orders.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    OrdersComponent
  ]
})

export class AdminLayoutModule {}
