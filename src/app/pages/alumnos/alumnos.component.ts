import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentFixture } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent, Curso } from './abm-alumnos/abm-alumnos.component';

export interface Alumno {
  id: number;
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

  dataSource = new MatTableDataSource(this.alumnos);

  displayedColumns: string[] = [
    'id',
    'nombreCompleto',
    'email',
    'curso',
    'fecha_inscripcion',
    'acciones'
  ];



  constructor(private matDialog: MatDialog) {}

  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)

    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            fecha_inscripcion: new Date(),
            id: this.dataSource.data.length + 1,
          }          
        ];
      }
    })
  }
}