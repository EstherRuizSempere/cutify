import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TrackModelInterface } from '@core/interfaces/track-model..interface';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

@Component({
  selector: 'app-card-player',
   imports: [ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModelInterface = { _id: 0, name: '', album: '', url: '', cover: '' };
}
