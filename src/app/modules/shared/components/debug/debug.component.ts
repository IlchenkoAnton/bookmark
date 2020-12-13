import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// <bm-debug [Data]="model"></bm-debug>
@Component({
    selector: 'bm-debug',
    template: `
        <div>
            DEBBUG:
            <pre>{{ Data | json }}</pre>
        </div>`,
    styles: [
        `div {
            position: relative;
            border: 1px solid red;
            font-weight: bold;
            padding: 5px;
        }`
    ],
    changeDetection: ChangeDetectionStrategy.Default
})
export class DebugComponent {
    private data: any;

    @Input()
    set Data(value: any) {
        this.data = value;
    }

    get Data(): any {
        return this.data;
    }
}