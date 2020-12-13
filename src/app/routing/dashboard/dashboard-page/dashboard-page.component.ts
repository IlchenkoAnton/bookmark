import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { InitBookmarks, selectBookmarks } from '../../../modules/bookmarks';

@Component({
    templateUrl: './dashboard-page.component.html',
    styleUrls: [ './dashboard-page.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {
    constructor(
        private readonly store: Store<any>
    ) {
        debugger;
        this.store.pipe(
            select(selectBookmarks)
        ).subscribe((result) => {
            debugger;
        }, (error) => {
            debugger;
        }, () => {
            debugger;
        });


        setTimeout(() => {
            debugger;
            this.store.dispatch(new InitBookmarks());
        }, 1000);
    }
}