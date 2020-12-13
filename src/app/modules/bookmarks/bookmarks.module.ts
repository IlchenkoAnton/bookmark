import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookmarksApiModule } from '../api/bookmarks';

import { BookmarksEffects } from './store/bookmarks.effects';
import { bookmarkFeatureKey, bookmarksReducers } from './store/bookmarks.reducer';

@NgModule({
    imports: [
        BookmarksApiModule,
        StoreModule.forFeature(bookmarkFeatureKey, bookmarksReducers),
        EffectsModule.forFeature([BookmarksEffects])
    ]
})
export class BookmarksModule {}