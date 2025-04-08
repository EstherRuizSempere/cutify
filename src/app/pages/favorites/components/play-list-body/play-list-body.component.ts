import {Component, Input, OnInit} from '@angular/core';
import {TrackModelInterface} from '@core/interfaces/track-model..interface';
import {NgTemplateOutlet} from '@angular/common';
import {OrderListPipe} from '@shared/pipes/order-list.pipe';

@Component({
  selector: 'app-play-list-body',
  imports: [NgTemplateOutlet, OrderListPipe],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css',
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: TrackModelInterface[] = [];
  //inicializo el pipe por defecto
  optionSort: { property: string | null; order: string } = {
    property: null,
    order: 'asc',
  };

  ngOnInit(): void {
    console.log('Tracks recibidos:', this.tracks);


  }

  changeSort(property: string) {
    const {order} = this.optionSort;
    this.optionSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc',
    }
    console.log(this.optionSort);
  }
}
