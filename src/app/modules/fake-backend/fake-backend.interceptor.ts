import { Injectable, Provider } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HTTP_INTERCEPTORS,
    HttpResponse
} from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

import { bookmarksListMock } from './mock/bookmarks-list.mock';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    private delay: number = 1200;

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

        if (request.method === 'GET' && request.url.includes('/bookmarks/list')) {
            return timer(this.delay).pipe(
                mapTo(new HttpResponse({ status: 200, body: bookmarksListMock })),
                tap(() => console.log(`FakeBackend: ${request.url}`))
            );
        }

        return next.handle(request);
    }
}

export const fakeBackendProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};