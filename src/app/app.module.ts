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
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    SignupComponent,
    LoginComponent,
    PageNotFoundComponent
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
