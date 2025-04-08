import {  Component } from '@angular/core';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
@Component({
  selector: 'app-home',
  imports: [SideBarComponent, RouterOutlet, MediaPlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
