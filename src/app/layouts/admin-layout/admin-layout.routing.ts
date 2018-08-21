import { Routes, CanActivate } from '@angular/router';

import { DashboardComponent } from '../../page/dashboard/dashboard.component';
import { UserProfileComponent } from '../../page/user-profile/user-profile.component';
import { TableListComponent } from '../../page/table-list/table-list.component';
import { TypographyComponent } from '../../page/typography/typography.component';
import { IconsComponent } from '../../page/icons/icons.component';
import { MapsComponent } from '../../page/maps/maps.component';
import { NotificationsComponent } from '../../page/notifications/notifications.component';
import { UpgradeComponent } from '../../page/upgrade/upgrade.component';
import { AuthService } from '../../service/auth.service';
import { AdminLayoutComponent } from './admin-layout.component';
import { OrdersComponent } from '../../page/orders/orders.component';
export const AdminLayoutRoutes: Routes = [

    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AuthService]
            },
            {
                path: 'orders',
                component: OrdersComponent,
                canActivate: [AuthService]
            },
            {
                path: 'user-profile',
                component: UserProfileComponent,
                canActivate: [AuthService]
            },
            {
                path: 'table-list',
                component: TableListComponent,
                canActivate: [AuthService]
            },
            {
                path: 'typography',
                component: TypographyComponent,
                canActivate: [AuthService]
            },
            {
                path: 'icons',
                component: IconsComponent,
                canActivate: [AuthService]
            },
            {
                path: 'maps',
                component: MapsComponent,
                canActivate: [AuthService]
            },
            {
                path: 'notifications',
                component: NotificationsComponent,
                canActivate: [AuthService]
            },
            {
                path: 'upgrade',
                component: UpgradeComponent,
                canActivate: [AuthService]
            }
        ]
    }
];
