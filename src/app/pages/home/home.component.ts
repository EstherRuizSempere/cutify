import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { MediaPlayerComponent } from '../../shared/components/media-player/media-player.component';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';
@Component({
  selector: 'app-home',
  imports: [SideBarComponent, RouterOutlet, MediaPlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
