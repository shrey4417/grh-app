import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Appointment } from '../dto/Appointment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/';

  bookAppointment(appointment : Appointment) {
    return this.http.post<any>(this.url + 'appointment', appointment);
  }

  constructor(private http:HttpClient) { }
}
