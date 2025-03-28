import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-player',
  imports: [],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPlayerComponent { }
