import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';

 import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  exports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatListModule,

    MatMenuModule,
  ],
  imports: [
    CommonModule
  ]
})
export class MatTaskModule { }
