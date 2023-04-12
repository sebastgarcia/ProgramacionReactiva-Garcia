import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/pages/alumnos/alumnos.component';

@Pipe({
  name: 'nombreCompelto',
  pure: false,
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    return `${value.nombre} ${value.apellido}`;
  }

}
