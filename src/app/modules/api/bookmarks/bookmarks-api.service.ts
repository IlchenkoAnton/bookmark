import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigurationService } from '@modules/core';

import { IBookmarksResponse } from './dto/response/bookmarks-response.interface';

@Injectable()
export class BookmarksApiService {
    private endPoint: string = 'bookmarks';
    private baseUrl: string;

    constructor(
        private readonly httpClient: HttpClient,
        readonly appConfigurationService: AppConfigurationService,
    ) {
        this.baseUrl = appConfigurationService.Config.BaseUrl;
    }

    public getList(): Observable<IBookmarksResponse> {
        const path: string = this.getPath('list');

        return this.httpClient.get<IBookmarksResponse>(path);
    }

    private getPath(url): string {
        return [ this.baseUrl, this.endPoint, url ].join('/');
    }
}