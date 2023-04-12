import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {
  AbmAlumnosComponent,
  Curso,
} from './abm-alumnos/abm-alumnos.component';
import { AlumnoService } from 'src/app/services/alumno.service';

export interface Alumno {
  id: any;
  nombre: string;
  apellido: string;
  email: string;
  curso: string;
  fecha_inscripcion: Date;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent {
  alumnos: Alumno[] = [];

  dataSource = new MatTableDataSource(this.alumnos);

  displayedColumns: string[] = [
    'id',
    'nombreCompleto',
    'email',
    'curso',
    'fecha_inscripcion',
    'acciones',
  ];

  constructor(
    private matDialog: MatDialog,
    private alumnoService: AlumnoService
  ) {}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.alumnos = this.alumnoService.getAlumno();
    this.dataSource = new MatTableDataSource(this.alumnos);
  }

  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent);

    this.cargarAlumnos();

    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.alumnoService.agregarAlumno(valor);

        this.dataSource.data = this.alumnoService.getAlumno();
      }
    });
  }

  borrarAlumno(index: number) {
    this.alumnoService.borrarAlumno(index);
    this.cargarAlumnos();
  }

  editarAlumno(usuario: any, index: any): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent, {
      data: { alumno: usuario },
    });

    this.cargarAlumnos();
    dialog.afterClosed().subscribe((valor) => {


      //Actualizar un alumno cuando el valor.id sea igual a this.alumnos.id
      if (valor) {
        // buscar el alumno en el arreglo que sea igual a valor.id
        const alumno = this.alumnos.find((alumno) => alumno.id === valor.id);

        // El alumno ya existe, actualiza sus propiedades
        if (alumno) {
          // eliminar alumno del arreglo
          this.alumnos = this.alumnos.filter(
            (alumno) => alumno.id !== valor.id
          );

          // Actualizar propiedades del alumno
          alumno.nombre = valor.nombre;
          alumno.apellido = valor.apellido;
          alumno.email = valor.email;
          alumno.curso = valor.curso;

          // Update de alumno en el arreglo de alumnos
          this.alumnos.unshift(alumno);

          // Emitir evento de alumnos actualizados
          this.dataSource.data;
        }
      }
    });
  }
}
