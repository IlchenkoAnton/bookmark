import { NgModule } from '@angular/core';

import { BookmarksModule } from '../../modules/bookmarks';

import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        DashboardRoutingModule,
        BookmarksModule
    ],
    declarations: [
        DashboardPageComponent
    ]
})
export class DashboardModule {}