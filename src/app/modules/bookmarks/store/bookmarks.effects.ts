import { Injectable } from '@angular/core';
import { Status } from '@modules/common';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, startWith } from 'rxjs/operators';
import { IBookmark } from '../core/bookmark.interface';

import { BookmarksService } from '../core/bookmarks.service';
import { BookmarksActions, SetBookmarks, TBookmarksActions } from './bookmarks.actions';

@Injectable()
export class BookmarksEffects {
    @Effect()
    public loadBookmarks$: Observable<TBookmarksActions> = this.actions.pipe(
        ofType(BookmarksActions.InitBookmarks),
        concatMap(() => {
            return this.buildModel();
        })
    );

    constructor(
        private readonly actions: Actions,
        private readonly bokmarksService: BookmarksService
    ) {}

    private buildModel(): Observable<TBookmarksActions> {
        return this.bokmarksService.getBookmarks().pipe(
            map((bookmarks: IBookmark[]) => {
                return (bookmarks && bookmarks.length)
                    ? new SetBookmarks({ status: Status.READY, success: bookmarks })
                    : new SetBookmarks({ status: Status.EMPTY });
            }),
            catchError((error: unknown) => {
                console.error(error);

                return of(new SetBookmarks({ status: Status.ERROR }));
            }),
            startWith(new SetBookmarks({status: Status.PENDING}))
        );
    }
}