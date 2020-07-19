import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

// const Spotify = require('spotify-web-api-js');
// TODO use import more like https://www.npmjs.com/package/spotify-web-api-js#integrated-typescript-typings
import * as SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  private readonly localStorageTokenKey = 'spotifyToken';

  private clientId = '01eac0af946c4ad98a72c22467350058';
  private redirectHost = 'http://localhost:4200';

  private accessToken: string;
  private spotify = new SpotifyWebApi.default();

  constructor() {
  }

  /**
   * Restores token from localstorage and tests it
   * If no token saved
   * or token failed then redirect to auth
   * else save token as current one in service
   */
  private restoreAndTestToken() {
    const savedToken = localStorage.getItem(this.localStorageTokenKey);
    if (!savedToken) {
      this.redirectToAuth();
    } else {
      // Test token and redirect if fails
      this.spotifyApi.getMe().then((response) => {}, (error) => {
        this.redirectToAuth();
      });
    }
    this.setToken = savedToken;
  }

  private get spotifyApi() {
    if (!this.accessToken) {
      this.redirectToAuth();
    }
    return this.spotify;
  }

  // TODO maybe auth code flow with PKCE could also be good for app instead of implicit grant flow
  redirectToAuth() {
    const scopes = encodeURIComponent('playlist-read-collaborative playlist-read-private');
    const redirectUri = encodeURIComponent(this.redirectHost + '/spotifyAuth');

    // TODO could also use https://www.npmjs.com/package/angular-web-storage for convencience
    const state = uuidv4();
    localStorage.setItem('state', state);

    // tslint:disable-next-line: max-line-length
    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.clientId}&scope=${scopes}&redirect_uri=${redirectUri}&state=${state}`;
    window.location.href = url;
  }

  /**
   * Sets access token in controller and spotify object
   * @param token Access token from auth flow
   */
  set setToken(token: string) {
    localStorage.setItem(this.localStorageTokenKey, token);
    this.accessToken = token;
    this.spotify.setAccessToken(token);
  }

  retrievedToken(state: string, token: string) {
    const wasState = localStorage.getItem('state');

    if (wasState === state) {
      this.setToken = token;


    } else {
      // TODO present error
    }
  }

  // TODO description and typing
  // TODO only gets first 50 playlists -> make loop to get all playlists of user with offset and multiple requests
  public async getUserPlaylists(): Promise<SpotifyApi.ListOfUsersPlaylistsResponse> {
    // only do it once not in every request but not in constructor cause endless loop
    this.restoreAndTestToken();
    try {
      // should be this.spotifyApi.getUserPlaylists(undefined, {offset: 0, limit: 10})
      // but see https://github.com/JMPerez/spotify-web-api-js/issues/135#issuecomment-558817613
      // @ts-ignore
      const data = await this.spotifyApi.getUserPlaylists({offset: 0, limit: 50});
      return data;
    } catch (err) {
      // TODO error handling
      console.error(err);
    }
  }

  public async searchItem(searchString: string, type: ('album' | 'artist' | 'playlist' | 'track')[] ) {
    this.restoreAndTestToken();
    try {
      const data = await this.spotifyApi.search(searchString, type, {limit: 50});
      return data;
    } catch (err) {
      // TODO error handling
      console.error(err);
    }
  }

  public async getPlaylistTrackNames(playlistId: string) {
    this.restoreAndTestToken();
    try {
      const data = await this.spotifyApi.getPlaylistTracks(playlistId);
      return data.items.map((trackItem) => trackItem.track.name);
    } catch (err) {
      // TODO error handling
      console.error(err);
    }
  }

  // getTestTracks() {
  // }


}
