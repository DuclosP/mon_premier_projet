import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinuts'
})
export class ToMinutsPipe implements PipeTransform {

  transform(value: number): number {
    return Math.floor(value / 60);
  }

}
