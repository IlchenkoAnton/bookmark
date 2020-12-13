import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const notFoundRoutingConfig: Routes = [
    {
        path: '',
        component: NotFoundPageComponent
    }
];