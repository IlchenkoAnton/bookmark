import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfigurationService } from '../../core';

@Injectable()
export class BookmarksApiService {
    private baseUrl: string;

    constructor(
        private readonly httpClient: HttpClient,
        private readonly appConfigurationService: AppConfigurationService,
    ) {
        this.baseUrl = appConfigurationService.Config.BaseUrl;
    }

    public getList(): Observable<any> {
        const path: string = `${this.baseUrl}/list`;

        return this.httpClient.get(path);
    }
}