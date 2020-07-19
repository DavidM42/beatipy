import { Component, OnInit, Input } from '@angular/core';
import { BeatsaverApiService } from '../../services/beatsaverApi/beatsaver-api.service';
import { LevenshteinService } from '../../services/levenshtein/levenshtein.service';
import { BsaverSongInfo } from '../../services/beatsaverApi/BsaverSongInfo';
import { DomSanitizer } from '@angular/platform-browser';
import { SpotifySongInfo } from '../../services/spotifyApi/SpotifySongInfo';

@Component({
  selector: 'app-beatsaver-items',
  templateUrl: './beatsaver-items.component.html',
  styleUrls: ['./beatsaver-items.component.css']
})
export class BeatsaverItemsComponent implements OnInit {

  private spotifySongsInternal: SpotifySongInfo[];

  @Input() set spotifySongs(value: SpotifySongInfo[]) {
    this.spotifySongsInternal = value;

    // things to do on new data
    if (value && value.length > 0) {
      this.getBeatsaverMaps(value);
    }
  }

  get spotifySongs(): SpotifySongInfo[] {
    return this.spotifySongsInternal;
  }

  public beatsaverMaps: BsaverSongInfo[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private beatsaverApi: BeatsaverApiService,
    private levenshteinServuce: LevenshteinService
  ) { }

  ngOnInit() {
  }

  public safeBeatsaverInstallUrl(key: string) {
    return this.sanitizer.bypassSecurityTrustUrl('beatsaver://' + key);
  }


  private async getBeatsaverMaps(songs: SpotifySongInfo[]) {
    for (const song of songs) {
      // debugger;
      const search = song.artist + ' - ' + song.name;
      // TODO don't only append nearest songs but also consider rating and present multiple optons per song if possible
      const result: BsaverSongInfo[] = await this.beatsaverApi.querySearchAllSongInfos(search, 20);
      const nearestSong = this.levenshteinServuce.getNearestSong(song.artist, song.name, result);
      // debugger;
      this.beatsaverMaps.push(nearestSong);
    }
  }

}
