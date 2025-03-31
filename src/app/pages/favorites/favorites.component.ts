import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { HeaderUserComponent } from '../../shared/components/header-user/header-user.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';

@Component({
  selector: 'app-favorites',
  imports: [PlayListBodyComponent, PlayListHeaderComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {}
