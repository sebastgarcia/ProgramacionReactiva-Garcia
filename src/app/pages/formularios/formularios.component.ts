import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent {
  cursos = [
    'Artes Digitales',
    'Diseño UX/UI',
    'Marketing Digital',
    'Programación y Desarrollo',
    'Data',
    'Inversiones & Finanzas',
    'Business',
    'Ciberseguridad',
    'Producto',
    'No-Code',
  ];

  nombreControl = new FormControl(
    '', 
    [
      Validators.required
    ]);

  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.email
    ]
  )  


  formularioNuevoAlumno = new FormGroup({
    nombre: this.nombreControl,
    email: this.emailControl,
});
}
