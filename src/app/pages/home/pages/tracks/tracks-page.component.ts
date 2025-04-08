import { Component, OnDestroy, OnInit } from '@angular/core';
import { GenericSecctionComponent } from '../../components/generic-secction/generic-secction.component';
import { TrackModelInterface } from '@core/interfaces/track-model..interface';
import { TrackService } from 'src/app/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks',
  imports: [GenericSecctionComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css',
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModelInterface> = [];
  tracksRandom: Array<TrackModelInterface> = [];

  //lista de Observables
  listObservers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.trackService
      .getAllTracks$()
      .subscribe((respuesta: TrackModelInterface[]) => {
        this.tracksTrending = respuesta;
        console.log('respuesta api', respuesta);

      });
    this.trackService
      .getAllTracks$()
      .subscribe((respuesta: TrackModelInterface[]) => {
        this.tracksRandom = respuesta;
        console.log('respuesta api', respuesta);

      });
  }

  ngOnDestroy(): void {}
}
