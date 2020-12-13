import { TState } from '@modules/common';
import { Action } from '@ngrx/store';

import { IBookmark } from '../core/bookmark.interface';

export enum BookmarksActions {
    InitBookmarks   = '[Bookmarks] init',
    SetBookmarks    = '[Bookmarks] set list',
    CreateBookmark  = '[Bookmarks] create'
}

export class InitBookmarks implements Action {
    public readonly type: BookmarksActions = BookmarksActions.InitBookmarks;
}

export class SetBookmarks implements Action {
    public readonly type: BookmarksActions = BookmarksActions.SetBookmarks;

    constructor(public readonly payload: TState<IBookmark[]>) {}
}

export class CreateBookmark implements Action {
    public readonly type: BookmarksActions = BookmarksActions.CreateBookmark;

    constructor(public readonly payload: IBookmark) {}
}

export type TBookmarksActions = SetBookmarks | CreateBookmark | InitBookmarks;