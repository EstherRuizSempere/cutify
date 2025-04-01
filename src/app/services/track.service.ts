import { Injectable } from '@angular/core';
import { TrackModelInterface } from '@core/interfaces/track-model..interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TrackService {
   readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getAllTracks$(): Observable<TrackModelInterface[]> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
  }
}
