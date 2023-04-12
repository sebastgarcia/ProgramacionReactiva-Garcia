import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentFixture } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent, Curso } from './abm-alumnos/abm-alumnos.component';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MatCellDef } from '@angular/material/table';

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
  

  alumnos: Alumno [] = [];


  dataSource = new MatTableDataSource(this.alumnos);

  displayedColumns: string[] = [
    'id',
    'nombreCompleto',
    'email',
    'curso',
    'fecha_inscripcion',
    'acciones'
  ];



  constructor(private matDialog: MatDialog, private alumnoService: AlumnoService) {}

  ngOnInit(): void{
    this.cargarAlumnos()
  }

  cargarAlumnos() {
    this.alumnos = this.alumnoService.getAlumno();
    this.dataSource = new MatTableDataSource(this.alumnos)
  }

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

  borrarAlumno(index: number){
    this.alumnoService.borrarAlumno(index);
    this.cargarAlumnos();
  }

  editarAlumno(usuario: any, index: any): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
  }
  
}