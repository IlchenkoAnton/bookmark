import { NgModule } from '@angular/core';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';

import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ModelViewDirective } from './directives/model-view.directive';

@NgModule({
    declarations: [
        ModelViewDirective,

        ErrorMessageComponent,
        LoadingIndicatorComponent,
        EmptyDataComponent
    ],
    exports: [
        ModelViewDirective,

        ErrorMessageComponent,
        LoadingIndicatorComponent,
        EmptyDataComponent
    ],
    entryComponents: [
        ErrorMessageComponent,
        LoadingIndicatorComponent,
        EmptyDataComponent
    ]
})
export class SharedModule {}