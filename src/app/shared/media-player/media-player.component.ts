import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlbumInterface } from 'src/app/interfaces/album.interface';

@Component({
  selector: 'app-media-player',
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
})
export class MediaPlayerComponent {
  mockCover: AlbumInterface = {
    portada: 'https://www.lahiguera.net/musicalia/artistas/ed_sheeran/disco/11372/tema/25301/ed_sheeran_bad_habits-portada.jpg',
    album: 'Eddie El curioso',
    name: 'Edd Sheeran',
  };
}
