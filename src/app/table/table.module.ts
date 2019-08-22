import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TableRoutingModule
  ]
})
export class TableModule { }
