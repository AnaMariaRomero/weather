import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,  MatCardModule} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
