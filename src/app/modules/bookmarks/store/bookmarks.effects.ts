import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concat, Observable, of, timer } from 'rxjs';
import { catchError, concatMap, map, startWith } from 'rxjs/operators';
import { Status } from '../../common';
import { BookmarksActions, SetBookmarks, TBookmarksActions } from './bookmarks.actions';
import { IBookmarksState } from './bookmarks.state';

@Injectable()
export class BookmarksEffects {
    constructor(
        private readonly actions: Actions
    ) {}

    @Effect()
    public loadBookmarks$: Observable<TBookmarksActions> = this.actions.pipe(
        ofType(BookmarksActions.InitBookmarks),
        concatMap(() => {
            debugger;
            return timer(3000).pipe(
                map(() => {
                    return new SetBookmarks({
                        status: Status.READY,
                        success: []
                    });
                }),
                catchError((error: unknown) => {
                    console.error(error);

                    return of(new SetBookmarks({ status: Status.ERROR }));
                }),
                startWith(new SetBookmarks({status: Status.PENDING}))
            );
        })
    );
}