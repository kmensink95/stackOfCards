import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(items: any[], amount: number): unknown {
    let newItems = [];
    for (let i = 0; i < amount; i++) {
      newItems = [...newItems, items[i]];
    }
    return newItems;
  }

}
