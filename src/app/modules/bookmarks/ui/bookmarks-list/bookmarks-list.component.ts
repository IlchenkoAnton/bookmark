import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TModelState } from '@modules/common';
import { select, Store } from '@ngrx/store';

import { selectBookmarks } from '../../store/bookmarks.selectors';
import { IBookmark } from '../../core/bookmark.interface';
import { IBookmarksBaseState } from '../../store/bookmarks.state';

@Component({
    selector: 'bm-bookmarks-list',
    templateUrl: './bookmarks-list.component.html',
    styleUrls: [ './bookmarks-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarksListComponent implements OnInit {
    private model$: TModelState<IBookmark[]>;

    get Model$(): TModelState<IBookmark[]> {
        return this.model$;
    }

    constructor(
        private readonly store: Store<IBookmarksBaseState>
    ) {}

    public ngOnInit(): void {
        this.model$ = this.store.pipe(select(selectBookmarks));
    }
}
