import { Injectable } from '@angular/core';
import { BookmarksApiService, IBookmarksItemResponse, IBookmarksResponse } from '@modules/api/bookmarks';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { Bookmark } from './bookmark';
import { IBookmark } from './bookmark.interface';

@Injectable()
export class BookmarksService {
    constructor(
        private readonly bookmarksApiService: BookmarksApiService
    ) {}

    public getBookmarks(): Observable<IBookmark[]> {
        return this.bookmarksApiService.getList().pipe(
            pluck<IBookmarksResponse, IBookmarksItemResponse[]>('items'),
            map((items: IBookmarksItemResponse[]) => {
                return items.map((item: IBookmarksItemResponse) => this.makeIBookmark(item));
            })
        );
    }

    private makeIBookmark(item: IBookmarksItemResponse): IBookmark {
        return new Bookmark(item.id, item.url, item.name);
    }
}