import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TrackModelInterface} from '@core/interfaces/track-model..interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {
  }

  searchTracks$(track: string): Observable<TrackModelInterface[]> {
    const url = `${this.URL}/tracks?track=${track}`;
    return this.http.get(url).pipe(
      map((dataRaw: any) => dataRaw.data)
    )
  }
}
