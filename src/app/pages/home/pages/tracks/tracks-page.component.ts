import { Component, OnInit } from '@angular/core';
import { GenericSecctionComponent } from '../../components/generic-secction/generic-secction.component';
import * as dataRaw from '../../../../data/track.json';
import { TrackModelInterface } from '@core/interfaces/track-model..interface';
@Component({
  selector: 'app-tracks',
  imports: [GenericSecctionComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css',
})
export class TracksPageComponent implements OnInit {
  mockTrackList: Array<TrackModelInterface> = [];

  ngOnInit(): void {
    const { data }: any = dataRaw as any;
    this.mockTrackList = data[0].data;
    console.log(data[0].data);
  }
}
