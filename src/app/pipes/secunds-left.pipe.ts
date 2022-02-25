import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secundsLeft'
})
export class SecundsLeftPipe implements PipeTransform {

  transform(value: number): number {
    return Math.floor(value % 60);
  }

}
