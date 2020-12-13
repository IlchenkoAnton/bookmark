import { createSelector } from '@ngrx/store';

import { IBookmarksBaseState, IBookmarksState } from './bookmarks.state';

export const selectBookmarks = createSelector(
    (state: IBookmarksBaseState) => state.bookmark,
    (state: IBookmarksState) => state.list
);