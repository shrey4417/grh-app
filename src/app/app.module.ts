import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    AppointmentComponent,
    DoctorPortalComponent,
    FindMyDoctorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
