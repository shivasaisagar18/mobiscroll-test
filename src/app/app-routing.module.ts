import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calendar' ,
    loadChildren: () => import('./calendar-demo/calendar-demo.module').then(m => m.CalendarDemoModule)
  },
  {
    path: 'timepicker' ,
    loadChildren: () => import('./timepicker/timepicker.module').then(m => m.TimepickerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
