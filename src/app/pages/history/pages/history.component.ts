import {Component, OnInit} from '@angular/core';
import {PlayListBodyComponent} from '../../favorites/components/play-list-body/play-list-body.component';
import {SearchComponent} from '../components/search/search.component';
import {SearchService} from '../../../services/search.service';
import {TrackModelInterface} from '@core/interfaces/track-model..interface';
import {Observable, of} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [
    PlayListBodyComponent,
    SearchComponent,
    AsyncPipe
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit{
  resultList$: Observable<any> = of([])

  constructor(private searchService: SearchService) {
  }
  ngOnInit(): void {}

  getData(event: string) {

    this.resultList$ = this.searchService.searchTracks$(event)
    console.log('🤑🤑 Estoy en el padre', event);
  }
}
