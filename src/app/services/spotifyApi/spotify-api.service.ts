import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { environment } from '../../../environments/environment';

import * as SpotifyWebApi from 'spotify-web-api-js';
import { SpotifySongInfo } from './SpotifySongInfo';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  private readonly localStorageTokenKey = 'spotifyToken';

  private clientId = '01eac0af946c4ad98a72c22467350058';

  private accessToken: string;
  private spotify = new SpotifyWebApi.default();

  private redirectHost = environment.baseUrl;

  constructor() {}

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
      this.setToken = savedToken;
      // Test token and redirect if fails
      this.spotifyApi.getMe().then((response) => {}, (error) => {
        this.redirectToAuth();
      });
    }
  }

  private get spotifyApi() {
    if (!this.accessToken) {
      this.redirectToAuth();
    }
    return this.spotify;
  }

  redirectToAuth() {
    const scopes = encodeURIComponent('playlist-read-collaborative playlist-read-private');
    const redirectUri = encodeURIComponent(this.redirectHost + 'spotifyAuth');

    const state = uuidv4();
    // could also use https://www.npmjs.com/package/angular-web-storage for convencience
    localStorage.setItem('state', state);

  // maybe auth code flow with PKCE could also be good for app instead of implicit grant flow
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

  public async getPlaylistTracks(playlistId: string): Promise<SpotifySongInfo[]> {
    this.restoreAndTestToken();
    try {
      const data = await this.spotifyApi.getPlaylistTracks(playlistId);
      return data.items.map((trackItem) => {
        // set type as song because could also be show but don't want that
        const retypedTrack = trackItem.track as SpotifyApi.TrackObjectFull;
        return {
          name: retypedTrack.name,
          // TODO maybe combine all artists name here for good search or stay at only first artist?
          artist: retypedTrack.artists[0].name
        };
      });
    } catch (err) {
      // TODO error handling
      console.error(err);
    }
  }

  // getTestTracks() {
  // }


}
