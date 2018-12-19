import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { DataBaseService } from './service/data-base.service';

import { AllTaskComponent } from './all-task/all-task.component';
import { MyOpenTaskComponent } from './my-open-task/my-open-task.component';
import { OnHoldComponent } from './on-hold/on-hold.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DoneByMeComponent } from './done-by-me/done-by-me.component';
import { EscalationsComponent } from './escalations/escalations.component';
import { MatTaskModule } from './mat-task.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent,
    AllTaskComponent,
    DoneByMeComponent,
    EscalationsComponent,
    MyOpenTaskComponent,
    OnHoldComponent,
    PageNotFoundComponent

   ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTaskModule,
    AppRoutingModule

  ],
  providers: [DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
