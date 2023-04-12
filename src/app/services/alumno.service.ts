import { Injectable } from '@angular/core';
import { Alumno } from '../pages/alumnos/alumnos.component';

@Injectable({
  providedIn: 'root'
})


export class AlumnoService {

  generarIdUnico = () => { 
    //return Math.random().toString(30).substring(2);           
    return 'nnnnn'.replace(/[nt]/g, function(c) {
      var r = Math.random() * 5 | 0, v = c == 'n' ? r : (r & 0x3 | 0x8);
      return v.toString(5);
  });
} 

  alumnos: Alumno[] = [
    {
      id: this.generarIdUnico(),
      nombre: 'Lionel',
      apellido: 'Martinez',
      email: 'lio.matinez@gmail.com', 
      curso: 'Producto',
      fecha_inscripcion: new Date(),
    },
    {
      id: this.generarIdUnico(),
      nombre: 'Julian',
      apellido: 'Sanchez',
      email: 'juli.sanchez@gmail.com',
      curso: 'Artes Digitales',
      fecha_inscripcion: new Date(),
    },
    {
      id: this.generarIdUnico(),
      nombre: 'Agustina',
      apellido: 'Garcia',
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

  constructor() { }

  getAlumno(){
    return this.alumnos.slice();
  }

  borrarAlumno(index: number){
    this.alumnos.splice(index, 1)
  }

  agregarAlumno(alumno: any){
    const alumnoObj = {
      ...alumno,
      fecha_inscripcion: new Date(),
      
      id: this.generarIdUnico()
    }
    this.alumnos.push(alumnoObj)

}
 
}
