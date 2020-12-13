import { createSelector } from '@ngrx/store';

import { bookmarkFeatureKey } from './bookmarks.reducer';
import { IBookmarksState } from './bookmarks.state';

export const selectBookmarks = createSelector(
    state => state[bookmarkFeatureKey],
    (state: IBookmarksState) => state.list
);