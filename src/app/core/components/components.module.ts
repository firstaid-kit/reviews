import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';


import { HeaderBarComponent } from './header-bar/header-bar.component';


@NgModule({
  declarations: [
    HeaderBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    HeaderBarComponent
  ]
})
export class ComponentsModule { }
