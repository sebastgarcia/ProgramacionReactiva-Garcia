import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Alumno {
  id: any;
  nombre: string;
  apellido: string;
  email: string;
  curso: string;
  fecha_inscripcion: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  generarIdUnico = () => {
    return 'nnnnn'.replace(/[nt]/g, function (c) {
      var r = (Math.random() * 5) | 0,
        v = c == 'n' ? r : (r & 0x3) | 0x8;
      return v.toString(5);
    });
  };

  private alumnos: Alumno[];

  private alumnos$: Subject<Alumno[]>;

  constructor() {
    this.alumnos = [
      {
        id: this.generarIdUnico(),
        nombre: 'lionel',
        apellido: 'marGez',
        email: 'lio.matinez@gmail.com',
        curso: 'Producto',
        fecha_inscripcion: new Date(),
      },
      {
        id: this.generarIdUnico(),
        nombre: 'julia',
        apellido: 'sanchez',
        email: 'juli.sanchez@gmail.com',
        curso: 'Artes Digitales',
        fecha_inscripcion: new Date(),
      },
      {
        id: this.generarIdUnico(),
        nombre: 'Agustina',
        apellido: 'garcia',
        email: 'agus.1990@gmail.com',
        curso: 'Diseño UX/UI',
        fecha_inscripcion: new Date(),
      },
      {
        id: this.generarIdUnico(),
        nombre: 'Micaela',
        apellido: 'Godoy',
        email: 'mica.god@hotmail.com',
        curso: 'Data',
        fecha_inscripcion: new Date(),
      },
    ];

    this.alumnos$ = new Subject();
  }

  getListado() {
    return this.alumnos.slice();
  }

  borrarAlumno(index: number) {
    this.alumnos.splice(index, 1);
    this.alumnos$.next(this.alumnos);
    this.alumnos$.complete();
  }

  agregarAlumno(alumno: Alumno) {
    const alumnoObj = {
      ...alumno,
      fecha_inscripcion: new Date(),

      id: this.generarIdUnico(),
    };
    this.alumnos.push(alumnoObj);
    this.alumnos$.next(this.alumnos);
    this.alumnos$.complete();
  }

  getAlumnos$(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  cantidadAlumnosInscriptos() {
   return this.alumnos.length;
  }
}
