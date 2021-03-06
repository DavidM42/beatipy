import { Injectable } from '@angular/core';

// import { levenshtein } from 'fast-levenshtein';
// TODO fix import thing
const levenshtein = require('fast-levenshtein');

import { BsaverSongInfo } from '../beatsaverApi/BsaverSongInfo';

@Injectable({
  providedIn: 'root'
})
export class LevenshteinService {

  constructor() { }

  private getStringsDistance(stringOne: string, stringTwo: string): number {
    return levenshtein.get(stringOne, stringTwo);
  }

  public getSongArtistTitleDistance(artist: string, title: string, song: BsaverSongInfo): number {
    const artistDistance = this.getStringsDistance(song.metadata.songAuthorName, artist);
    const titleDistance = this.getStringsDistance(song.metadata.songName, title);

    // TODO maybe * or something? How to check good
    return artistDistance + titleDistance;
  }

  public getNearestSong(artist: string, title: string, songs: BsaverSongInfo[]): BsaverSongInfo {
    const minimumDistaneSong = {
      song: null,
      distance: Number.MAX_VALUE
    };

    for (const song of songs) {
      const songDistance = this.getSongArtistTitleDistance(artist, title, song);
      if (songDistance < minimumDistaneSong.distance) {
        minimumDistaneSong.distance = songDistance;
        minimumDistaneSong.song = song;
      }
    }
    return minimumDistaneSong.song;
  }
}
