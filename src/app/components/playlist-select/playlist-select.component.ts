import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SpotifyApiService } from '../../services/spotifyApi/spotify-api.service';
import { SpotifySongInfo } from '../../services/spotifyApi/SpotifySongInfo';

interface PlaylistInfo {
  name: string;
  id: string;
  iconUrl?: string;
}

@Component({
  selector: 'app-playlist-select',
  templateUrl: './playlist-select.component.html',
  styleUrls: ['./playlist-select.component.css']
})

export class PlaylistSelectComponent implements OnInit {

  public selectedPlaylist: PlaylistInfo;

  results: PlaylistInfo[];

  @Output() playlistTrackNames = new EventEmitter<SpotifySongInfo[]>();

  constructor(
    private spotifyApi: SpotifyApiService
  ) { }

  ngOnInit() {
  }

  public async playlistSelected() {
    // console.log('Song tracks:');
    const trackNames = await this.spotifyApi.getPlaylistTracks(this.selectedPlaylist.id);
    // console.log(trackNames);
    this.playlistTrackNames.next(trackNames);
  }

  public async search(event) {
    try {
      const results = await this.spotifyApi.searchItem(event.query, ['playlist']);
      this.results = results.playlists.items.map((playlist) => {
        const resultItem = {
          name: playlist.name,
          id: playlist.id,
          iconUrl: null
        };
        if (playlist.images && playlist.images[0]) {
          resultItem.iconUrl = playlist.images[0].url;
        }
        return resultItem;
      });
    } catch (e) {
      console.error(e);
    }

    // this.mylookupservice.getResults(event.query).then(data => {
    //     this.results = data;
    // });
  }

}
