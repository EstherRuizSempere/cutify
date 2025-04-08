import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs';
import {SearchService} from '../../../../services/search.service';

@Component({
  selector: 'app-search',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @Output() callbackData = new EventEmitter<string>();
  searchControl = new FormControl('');

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300), //Espero tres segundos cuando dejo de escribir
        distinctUntilChanged(), //evito que los valores sean iguales
        filter(track => track !== null && track.length >= 3) // Filtra `null` y términos cortos
      )
      .subscribe((value) => {
        // Aquí `track` es `string` (por el filtro anterior)
        this.callbackData.emit(value || '');
        console.log('🔴 Llamamos a nuestra API HTTP GET---> ', value);
      });
  }
}
