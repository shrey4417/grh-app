import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorPortalComponent } from './components/doctor-portal/doctor-portal.component';
import { FindMyDoctorComponent } from './components/find-my-doctor/find-my-doctor.component';
import { HomeComponent } from './components/home/home.component';
import { CareerComponent } from './components/career/career.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { BodyComponent } from './components/body/body.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    AppointmentComponent,
    DoctorPortalComponent,
    FindMyDoctorComponent,
    HomeComponent,
    CareerComponent,
    LoginComponent,
    ErrorComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
