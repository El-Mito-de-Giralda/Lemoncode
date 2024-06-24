import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda',
  standalone: true
})
export class BusquedaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
