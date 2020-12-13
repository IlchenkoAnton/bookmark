import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BookmarksEffects } from './store/bookmarks.effects';
import { bookmarkFeatureKey, bookmarksReducers } from './store/bookmarks.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(bookmarkFeatureKey, bookmarksReducers),
        EffectsModule.forFeature([BookmarksEffects])
    ]
})
export class BookmarksModule {}