import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutingConfig } from './app-routing-config';

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutingConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
