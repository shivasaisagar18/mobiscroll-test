import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDemoComponent } from './calendar-demo.component';
import { MbscModule } from '@mobiscroll/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CalendarDemoComponent
  ],
  imports: [
    CommonModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarDemoComponent
      }
    ])
  ]
})
export class CalendarDemoModule { }
