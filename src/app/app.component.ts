import { Component, OnInit } from '@angular/core';
import { BeatsaverApiService } from './services/beatsaverApi/beatsaver-api.service';
import { LevenshteinService } from './services/levenshtein/levenshtein.service';
import { SpotifyApiService } from './services/spotifyApi/spotify-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'beatiPy';

  public result: SongInfo;
  public spotifyResults;

  constructor(
    private beatsaverApi: BeatsaverApiService,
    private levevenstheinService: LevenshteinService,
    private spotifyApi: SpotifyApiService
  ) {}


  private async getBeatsaver() {
        // const artist = 'Mark Ronson';
        const artist = 'Bruno Mars';
        // const title = 'Uptown funk';
        const title = '24k Magic';
        const search = artist + ' - ' + title;

        const result: SongInfo[] = await this.beatsaverApi.querySearchAllSongInfos(search, 20);
        const nearestSong = this.levevenstheinService.getNearestSong(artist, title, result);
        this.result = nearestSong;
  }

  ngOnInit() {
    // this.getBeatsaver();
  }

  async getUserPlaylists() {
    this.spotifyResults = await this.spotifyApi.getUserPlaylists();
  }

  // startAuth() {
  //   this.spotifyApi.redirectToAuth();
  // }

}
