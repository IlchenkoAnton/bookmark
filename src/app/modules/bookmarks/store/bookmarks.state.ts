import { Status, TState } from '../../common';
import { IBookmark } from '../core/bookmark.interface';

export interface IBookmarksState {
    list?: TState<IBookmark[]>;
}

export const initialBookmarkState: IBookmarksState = {
    list: {
        status: Status.EMPTY
    }
};

export function getInitialState(): IBookmarksState {
    return initialBookmarkState;
}