import { IBookmarksResponse } from '@modules/api/bookmarks';

export const bookmarksListMock: IBookmarksResponse = {
    items: [
        {
            id: '1',
            url: 'https://ngrx.io/',
            name: 'NgRx'
        },
        {
            id: '2',
            url: 'https://www.learnrxjs.io/'
        },
        {
            id: '2',
            url: 'https://learn.javascript.ru/',
            name: 'LearnJS'
        }
    ]
};