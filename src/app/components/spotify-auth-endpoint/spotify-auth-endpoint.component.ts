import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyApiService } from '../../services/spotifyApi/spotify-api.service';

@Component({
  selector: 'app-spotify-auth-endpoint',
  templateUrl: './spotify-auth-endpoint.component.html',
  styleUrls: ['./spotify-auth-endpoint.component.css']
})
export class SpotifyAuthEndpointComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spotifyApiService: SpotifyApiService
  ) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      // console.log(fragment);
      const urlParams = new URLSearchParams(fragment);

      const accessToken = urlParams.get('access_token');
      const tokenType = urlParams.get('token_type');
      const expiresIn = urlParams.get('expires_in');
      const state = urlParams.get('state');

      // TODO then
      if (urlParams.has('error')) {
        const error = urlParams.get('error');
        // TODO display error with error value
      } else {
        this.spotifyApiService.retrievedToken(state, accessToken);
        this.router.navigate(['/']); // TODO correct?
      }

    });
  }

}
