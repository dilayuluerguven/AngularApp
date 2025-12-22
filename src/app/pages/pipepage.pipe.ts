import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipepage',
})
export class PipepagePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    var text = value as string;
    return text.toUpperCase();
  }
}
