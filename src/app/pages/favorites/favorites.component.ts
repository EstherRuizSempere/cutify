import {  Component } from '@angular/core';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import {TrackModelInterface} from '@core/interfaces/track-model..interface';
import {SearchService} from '../../services/search.service';
import {TrackService} from '../../services/track.service';

@Component({
  selector: 'app-favorites',
  imports: [PlayListBodyComponent, PlayListHeaderComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  tracksList: TrackModelInterface[] = []; // Inicializa como array vacío

  constructor(private trackService: TrackService) {} // Inyecta el servicio

  ngOnInit(): void {
    this.loadTracks();
  }

  loadTracks() {
    this.trackService.getAllTracks$().subscribe({
      next: (tracks) => {
        this.tracksList = tracks; // Asigna los tracks recibidos
      },
      error: (err) => console.error('Error al cargar tracks:', err)
    });
  }
}
