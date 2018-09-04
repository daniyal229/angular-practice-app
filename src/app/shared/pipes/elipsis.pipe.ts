import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipsis'
})
export class ElipsisPipe implements PipeTransform {

  transform(value: string, cutoff?: number): any {
    if(!!!cutoff){
      cutoff = 10;
    }
    if(value.length > cutoff){
      value = value.substring(0,cutoff) + "...."
    }
    return value;
  }

}
