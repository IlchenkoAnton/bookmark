import { BookmarksActions, SetBookmarks, TBookmarksActions } from './bookmarks.actions';
import { IBookmarksState, initialBookmarkState } from './bookmarks.state';

export const bookmarkFeatureKey: string = 'bookmark';

export const bookmarksReducers = (
    state: IBookmarksState = initialBookmarkState,
    action: TBookmarksActions
): IBookmarksState => {
    switch (action.type) {
        case BookmarksActions.SetBookmarks:
            return {
                ...state,
                list: (action as SetBookmarks).payload
            };
        default:
            return state;
    }
};