import { Injectable } from '@angular/core';

import { IAppConfiguration } from './app-configuration.interface';

@Injectable()
export class AppConfigurationService {
    private config: IAppConfiguration;

    get Config(): IAppConfiguration {
        return this.config;
    }

    constructor() {
        this.initConfig();
    }

    private initConfig(): void {
        this.config = {
            BaseUrl: '/'
        };
    }
}