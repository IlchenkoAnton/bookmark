import { NgModule } from '@angular/core';
import { BookmarksApiService } from './bookmarks-api.service';

@NgModule({
    providers: [
        BookmarksApiService
    ]
})
export class BookmarksApiModule {}