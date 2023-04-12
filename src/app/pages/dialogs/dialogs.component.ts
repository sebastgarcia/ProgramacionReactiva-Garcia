import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosDialogsComponent } from './mis-dialogs/usuarios-dialogs/usuarios-dialogs.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {

  constructor(
    private dialogService: MatDialog
  ){}

  abrirDialogsDeNuevoAlumno(): void{
    this.dialogService.open(UsuariosDialogsComponent, {
      width: '80vw',
      data: {
        
      }
    })
  }
}
