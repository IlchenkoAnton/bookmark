import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IBookmark } from '../../core/bookmark.interface';

@Component({
    selector: 'bm-bookmarks-item',
    templateUrl: './bookmarks-item.component.html',
    styleUrls: [ './bookmarks-item.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarksItemComponent {
    private bookmark: IBookmark;

    @Input()
    set Bookmark(value: IBookmark) {
        this.bookmark = value;
    }

    get Bookmark(): IBookmark {
        return this.bookmark;
    }
}