import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftLandscapeComponent } from './components/left-landscape/left-landscape.component';
import { CenterLandscapeComponent } from './components/center-landscape/center-landscape.component';
import { RightLandscapeComponent } from './components/right-landscape/right-landscape.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    LeftLandscapeComponent,
    CenterLandscapeComponent,
    RightLandscapeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
