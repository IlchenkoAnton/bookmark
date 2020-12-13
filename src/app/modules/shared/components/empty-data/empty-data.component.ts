import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'bm-empty-data',
    templateUrl: './empty-data.component.html',
    styleUrls: [ './empty-data.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyDataComponent {}