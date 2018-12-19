import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyOpenTaskComponent } from './my-open-task/my-open-task.component';
import { CommonModule } from '@angular/common';
import { EscalationsComponent } from './escalations/escalations.component';
import { OnHoldComponent } from './on-hold/on-hold.component';
import { DoneByMeComponent } from './done-by-me/done-by-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllTaskComponent } from './all-task/all-task.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/myOpenTask',
    pathMatch: 'full'
  },
  {
    path: 'myOpenTask',
    component: MyOpenTaskComponent
  },
  {
    path: 'escalations',
    component: EscalationsComponent
  },
  {
    path: 'onHold',
    component: OnHoldComponent
  },
  {
    path: 'doneByMe',
    component: DoneByMeComponent
  },
  {
    path: 'allTask',
    component: AllTaskComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
