import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookmarksApiModule } from '@modules/api/bookmarks';
import { SharedModule } from '@modules/shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BookmarksService } from './core/bookmarks.service';
import { BookmarksEffects } from './store/bookmarks.effects';
import { bookmarksReducers } from './store/bookmarks.reducer';
import { bookmarkFeatureKey } from './store/bookmarks.state';
import { BookmarksListComponent } from './ui/bookmarks-list/bookmarks-list.component';

@NgModule({
    imports: [
        CommonModule,
        BookmarksApiModule,
        StoreModule.forFeature(bookmarkFeatureKey, bookmarksReducers),
        EffectsModule.forFeature([BookmarksEffects]),
        SharedModule
    ],
    declarations: [
        BookmarksListComponent
    ],
    exports: [
        BookmarksListComponent
    ],
    providers: [
        BookmarksService
    ]
})
export class BookmarksModule {}