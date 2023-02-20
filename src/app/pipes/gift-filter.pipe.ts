import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class GiftFilterPipe implements PipeTransform {
  transform(items: any[], searchValue: string): any[] {
    if (!items) return [];
    if (!searchValue) return items;
  
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(searchValue);
      });
    });
   }
}
