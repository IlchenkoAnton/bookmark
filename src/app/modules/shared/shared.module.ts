import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DebugComponent } from './components/debug/debug.component';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ModelViewDirective } from './directives/model-view.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModelViewDirective,

        ErrorMessageComponent,
        LoadingIndicatorComponent,
        EmptyDataComponent,
        DebugComponent
    ],
    exports: [
        ModelViewDirective,

        ErrorMessageComponent,
        LoadingIndicatorComponent,
        EmptyDataComponent,
        DebugComponent
    ],
    entryComponents: [
        ErrorMessageComponent,
        LoadingIndicatorComponent,
        EmptyDataComponent
    ]
})
export class SharedModule {}