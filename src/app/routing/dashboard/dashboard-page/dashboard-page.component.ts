import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBookmarksBaseState } from '@modules/bookmarks/store/bookmarks.state';
import { Store } from '@ngrx/store';
import { InitBookmarks } from '@modules/bookmarks';

@Component({
    templateUrl: './dashboard-page.component.html',
    styleUrls: [ './dashboard-page.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit {
    constructor(private readonly store: Store<IBookmarksBaseState>) {}

    public ngOnInit(): void {
        this.store.dispatch(new InitBookmarks());
    }
}