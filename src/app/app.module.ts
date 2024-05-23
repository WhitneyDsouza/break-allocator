// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

import { AppComponent } from './app.component';
import { ShiftInputComponent } from './shift-input/shift-input.component';
import { ScheduleDisplayComponent } from './schedule-display/schedule-display.component';

const routes: Routes = [
  { path: '', component: ShiftInputComponent },
  { path: 'schedule', component: ScheduleDisplayComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShiftInputComponent,
    ScheduleDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // Add RouterModule with routes configuration
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
