import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ControlErrorMessages'
})
export class ControlErrorMessagesPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {
    let defaultMsg = 'Error desconocido';

    const opciones:Record <string, string> = {
      required: 'Este campo es obligatorio',
      pattern: 'Por favor ingrese un email válido'

    }

    if (opciones[error.key]){
      defaultMsg = opciones[error.key]
    }

    return defaultMsg;
  }

}
