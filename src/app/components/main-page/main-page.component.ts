import { Component, OnInit } from '@angular/core';
import { SpotifySongInfo } from '../../services/spotifyApi/SpotifySongInfo';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // TODO make favicon?

  public beatsaverTableSongReceiver: SpotifySongInfo[];

  constructor() { }

  ngOnInit() {
  }

  public onPlaylistTracksReceived(names: SpotifySongInfo[]) {
    this.beatsaverTableSongReceiver = names;
  }

}
