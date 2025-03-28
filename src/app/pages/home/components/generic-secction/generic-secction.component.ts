import { Component, Input } from '@angular/core';
import { TrackModelInterface } from '@core/interfaces/track-model..interface';
import { DataTrack } from 'src/app/interfaces/dataTrack.interface';
import { CardPlayerComponent } from '../card-player/card-player.component';
import * as dataRaw from '../../../../data/track.json';


@Component({
  selector: 'app-generic-secction',
  imports: [CardPlayerComponent],
  templateUrl: './generic-secction.component.html',
  styleUrl: './generic-secction.component.css',
})
export class GenericSecctionComponent {

  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big'; //es como una ternaria y por defect dir'e que es big
  @Input() dataTracks: Array<TrackModelInterface> = [];
}
