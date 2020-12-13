import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
    imports: [
        NotFoundRoutingModule
    ],
    declarations: [
        NotFoundPageComponent
    ]
})
export class NotFoundModule {}