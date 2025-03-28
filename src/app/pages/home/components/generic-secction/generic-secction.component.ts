import { Component, Input } from '@angular/core';
import { TrackModelInterface } from '@core/interfaces/track-model..interface';
import { DataTrack } from 'src/app/interfaces/dataTrack.interface';

@Component({
  selector: 'app-generic-secction',
  imports: [],
  templateUrl: './generic-secction.component.html',
  styleUrl: './generic-secction.component.css',
})
export class GenericSecctionComponent {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big'; //es como una ternaria y por defect dir'e que es big
  @Input() dataTracks: Array<TrackModelInterface> = [];
}
