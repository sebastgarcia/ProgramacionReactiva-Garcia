import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/pages/alumnos/alumnos.component';

@Pipe({
  name: 'nombreCompelto',
  pure: false,
})



export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    
    let nombre = `${value.nombre}`.toLocaleLowerCase();
       
    nombre = nombre[0].toUpperCase() + nombre.slice(1);

    let apellido = `${value.apellido}`.toLocaleLowerCase();

    apellido = apellido[0].toUpperCase() + apellido.slice(1);

    return nombre + ' ' + apellido

  }
  

}
