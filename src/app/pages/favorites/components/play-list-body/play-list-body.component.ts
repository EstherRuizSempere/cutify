import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/track.json';
import { TrackModelInterface } from '@core/interfaces/track-model..interface';
import { NgTemplateOutlet } from '@angular/common';
import { OrderListPipe } from '@shared/pipes/order-list.pipe';

@Component({
  selector: 'app-play-list-body',
  imports: [NgTemplateOutlet, OrderListPipe],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css',
})
export class PlayListBodyComponent implements OnInit {
  mockTrackListFavorite: Array<TrackModelInterface> = [];
  //inicializo el pipe por defecto
  optionSort: { property: string | null; order: string } = {
    property: null,
    order: 'asc',
  };

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.mockTrackListFavorite = data;
    console.log(data);
  }

  changeSort(property: string) {
    const { order } = this.optionSort;
    this.optionSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc',
    }
    console.log(this.optionSort);
  }
}
