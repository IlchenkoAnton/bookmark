import { NgModule } from '@angular/core';

import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        LoginRoutingModule
    ],
    declarations: [
        LoginPageComponent
    ]
})
export class LoginModule {}