import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {CalendarModule} from 'primeng/calendar';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {DragDropModule} from 'primeng/dragdrop';
import {ProgressBarModule} from 'primeng/progressbar';
import {DataTableModule} from "angular-6-datatable";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DataTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FullCalendarModule,
    DragDropModule,
    ProgressBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
