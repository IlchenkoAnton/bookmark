import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'bm-error-message',
    templateUrl: './error-message.component.html',
    styleUrls: [ './error-message.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent {}