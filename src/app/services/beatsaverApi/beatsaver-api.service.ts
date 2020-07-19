import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeatsaverApiService {

  private beatsaverApiBaseUrl = 'https://beatsaver.com/api/';

  constructor(private http: HttpClient) { }

  // maybe improve search to search for author and title for better results and less filtering?
  // strange advanced search lacene syntax
  private async querySearchByPage(searchText: string, page = 0): Promise<SearchApiResponse> {
    return new Promise((resolve, reject) => {
      const url = `${this.beatsaverApiBaseUrl}search/text/${page}?q=${searchText}`;
      this.http.get(url).subscribe((rawResult) => {
        const resultTyped = rawResult as SearchApiResponse;
        resolve(resultTyped);
      });
    });
  }

  public async querySearchAllSongInfos(searchText: string, maximumResults: number = null): Promise<SongInfo[]> {
    let allSongsInfo = [];

    let currentpage = 0;
    let lastPage = Number.MAX_VALUE;
    let totalDocs = Number.MAX_VALUE;

    while (currentpage < lastPage && allSongsInfo.length < totalDocs) {
      const pageResults = await this.querySearchByPage(searchText, currentpage);

      currentpage += 1;
      lastPage = pageResults.lastPage;
      totalDocs = pageResults.totalDocs;
      allSongsInfo =  allSongsInfo.concat(pageResults.docs);
      if (maximumResults && allSongsInfo.length >= maximumResults) {
        console.log('Limit of ' + maximumResults + ' results reached');
        break;
      }
    }

    console.log('In total search could return: ' + totalDocs + ' results');
    console.log('Returning ' + allSongsInfo.length + ' results');
    return allSongsInfo;
  }

  // Beastsaver url is https://bsaber.com/songs/${song.key}/

}
