import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyAuthEndpointComponent } from './components/spotify-auth-endpoint/spotify-auth-endpoint.component';
import { MainPageComponent } from './components/main-page/main-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'spotifyAuth', component: SpotifyAuthEndpointComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
