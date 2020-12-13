import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigurationService } from '@modules/core';

import { IBookmarksResponse } from './dto/response/bookmarks-response.interface';

@Injectable()
export class BookmarksApiService {
    private baseUrl: string;

    constructor(
        private readonly httpClient: HttpClient,
        readonly appConfigurationService: AppConfigurationService,
    ) {
        this.baseUrl = appConfigurationService.Config.BaseUrl;
    }

    public getList(): Observable<IBookmarksResponse> {
        const path: string = `${this.baseUrl}/list`;

        return this.httpClient.get<IBookmarksResponse>(path);
    }
}