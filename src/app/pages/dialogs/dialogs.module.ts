import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsComponent } from './dialogs.component';
import { MatButtonModule } from '@angular/material/button';
import { UsuariosDialogsComponent } from './mis-dialogs/usuarios-dialogs/usuarios-dialogs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';



@NgModule({
  declarations: [
    DialogsComponent,
    UsuariosDialogsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    DirectivesModule,
  ], 
  exports:[
    DialogsComponent
  ]
})
export class DialogsModule { }
