import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { loginRoutingConfig } from './login-routing-config';

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutingConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule {}