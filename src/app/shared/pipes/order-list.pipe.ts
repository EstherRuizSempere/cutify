import { Pipe, type PipeTransform } from '@angular/core';
import { TrackModelInterface } from '@core/interfaces/track-model..interface';

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {
  transform(
    value: TrackModelInterface[],
    args: string | null = null
  ): Array<TrackModelInterface> {
    console.log('👉', value);
    console.log('🌝', args)
    return value;
  }
}
//TODO: TERMINAR DE IMPLEMENTAR LA PIPE CON EL ORDEN ASCENDENTE O DESCENDENTE
