import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppConfigurationService } from './configuration/app-configuration.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AppConfigurationService
    ]
})
export class CoreModule {}