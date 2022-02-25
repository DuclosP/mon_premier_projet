import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ajoutDuZero'
})
export class AjoutDuZeroPipe implements PipeTransform {

  transform(value: number): (string | number) {
    if(value <= 9){
      return "0" + value;
    }
    return value;
  }

}
