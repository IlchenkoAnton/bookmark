import { NgModule } from '@angular/core';
import { fakeBackendProvider } from './fake-backend.interceptor';

@NgModule({
    providers: [
        fakeBackendProvider
    ]
})
export class FakeBackendModule {}