import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlumnoService } from 'src/app/services/alumno.service';



export interface Curso{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})

export class AbmAlumnosComponent {



 cursos: Curso[] = [
    {value: 'Artes Digitales', viewValue: 'Artes Digitales',},
    {value: 'Diseño UX/UI', viewValue: 'Diseño UX/UI',},
    {value: 'Marketing Digital', viewValue: 'Marketing Digital',},
    {value: 'Programación y Desarrollo', viewValue: 'Programación y Desarrollo',},
    {value: 'Data', viewValue: 'Data',},
    {value: 'Inversiones & Finanzas', viewValue: 'Inversiones & Finanzas',},
    {value: 'Business', viewValue: 'Business',},
    {value: 'Producto', viewValue: 'Producto',},
  ];



  nombreControl = new FormControl(
    '', 
    [
      Validators.required
    ]
  );

  apellidoControl = new FormControl(
    '', 
    [
      Validators.required
    ]
  );

  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]
  );

  cursoControl = new FormControl(
    '',
 [
   Validators.required
 ]
);

  formularioNuevoAlumno = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    curso: this.cursoControl,
});







constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>, private alumnoService: AlumnoService, private matDialog: MatDialog) {}

guardar():void {
  this.dialogRef.close(this.formularioNuevoAlumno.value)
}

currentIndex: any;

editarAlumno(usuario: any, index: any){
  

  console.log(index)
  this.currentIndex = index;
  
  this.matDialog.open(AbmAlumnosComponent).afterOpened().subscribe(index)
  
  this.formularioNuevoAlumno.setValue(usuario)
  
}

}