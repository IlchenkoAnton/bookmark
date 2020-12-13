import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutingConfig } from './app-routing-config';
import { MainComponent } from './main.component';

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutingConfig)
    ],
    declarations: [
        MainComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
