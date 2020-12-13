import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';

export const loginRoutingConfig: Routes = [
    {
        path: '',
        component: LoginPageComponent
    }
];