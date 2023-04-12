import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    DirectivesModule,
    PipesModule,
    MatTooltipModule
    
  ]
})
export class SharedModule { }
