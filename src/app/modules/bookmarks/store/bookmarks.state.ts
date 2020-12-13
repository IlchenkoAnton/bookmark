import { Status, TState } from '@modules/common';

import { IBookmark } from '../core/bookmark.interface';

export const bookmarkFeatureKey: string = 'bookmark';

export interface IBookmarksBaseState {
    bookmark: IBookmarksState;
}
export interface IBookmarksState {
    list?: TState<IBookmark[]>;
}

export const initialBookmarkState: IBookmarksState = {
    list: {
        status: Status.EMPTY
    }
};