import { Pipe, type PipeTransform } from '@angular/core';
import { TrackModelInterface } from '@core/interfaces/track-model..interface';

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {
  transform(
    value: Array<any>,
    args: string | null = null, sort:string = 'asc'
  ): Array<TrackModelInterface> {
    try{

      if(args === null){
        return value;
      }else{
        const tempList = value.sort((a, b) => {
          if(a[args] < b[args]) {
            return -1;
          }else if(a[args] === b[args]){
            return 0;
          }else if(a[args] > b[args]){
            return 1;
          }
          return 1;
        });
        return (sort === 'asc') ? tempList : tempList.reverse();
      }

    }catch(error){
      console.log('Error en: ' + error)
      return value;
    }
  }
}
