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

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.mockTrackListFavorite = data;
    console.log(data)
  }
}
