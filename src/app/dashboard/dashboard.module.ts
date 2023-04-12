import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardsModule } from '../pages/cards/cards.module';
import { AlumnosModule } from '../pages/alumnos/alumnos.module';
import { FormulariosModule } from '../pages/formularios/formularios.module';
import { DialogsModule } from '../pages/dialogs/dialogs.module';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CardsModule,
    AlumnosModule,
    FormulariosModule,
    DialogsModule,

  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
