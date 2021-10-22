import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    return value[0].toUpperCase()+value.substring(1,value.length);
  }

}
