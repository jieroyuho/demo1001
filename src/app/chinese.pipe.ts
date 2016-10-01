import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chinese'
})
export class ChinesePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
