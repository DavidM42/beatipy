import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyAuthEndpointComponent } from './components/spotify-auth-endpoint/spotify-auth-endpoint.component';
import { PlaylistSelectComponent } from './components/playlist-select/playlist-select.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyAuthEndpointComponent,
    PlaylistSelectComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    // TODO create sub module for ui and import primegn only there
    AutoCompleteModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
