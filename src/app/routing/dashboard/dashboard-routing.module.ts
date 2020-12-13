import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { dashboardRoutingConfig } from './dashboard-routing-config';

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutingConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}