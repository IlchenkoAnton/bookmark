import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { notFoundRoutingConfig } from './not-found-routing-config';

@NgModule({
    imports: [
        RouterModule.forChild(notFoundRoutingConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class NotFoundRoutingModule {}