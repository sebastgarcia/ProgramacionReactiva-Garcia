import { Injectable } from '@angular/core';
import { Alumno } from '../pages/alumnos/alumnos.component';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService {

  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Lionel',
      apellido: 'Martinez',
      email: 'lio.matinez@gmail.com', 
      curso: 'Producto',
      fecha_inscripcion: new Date(),
    },
    {
      id: 2,
      nombre: 'Julian',
      apellido: 'Sanchez',
      email: 'juli.sanchez@gmail.com',
      curso: 'Artes Digitales',
      fecha_inscripcion: new Date(),
    },
    {
      id: 3,
      nombre: 'Agustina',
      apellido: 'Garcia',
      email: 'agus.1990@gmail.com',
      curso: 'Diseño UX/UI',
      fecha_inscripcion: new Date(),
    },
    {
      id: 4,
      nombre: 'Micaela',
      apellido: 'Godoy',
      email: 'mica.god@hotmail.com',
      curso: 'Data',
      fecha_inscripcion: new Date(),
    },
  ];

  constructor() { }

  getAlumno(){
    return this.alumnos.slice();
  }

  borrarAlumno(index: number){
    this.alumnos.splice(index, 1)
  }

 
}
