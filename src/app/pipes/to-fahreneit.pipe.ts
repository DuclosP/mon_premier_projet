import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahreneit'
})
export class ToFahreneitPipe implements PipeTransform {

  transform(value: number): number {
    return (value * 9/5)+32;
  }
}
