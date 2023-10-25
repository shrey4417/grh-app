import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  patient : Object = {}

  appointmentForm : FormGroup = new FormGroup({
    'patientName': new FormControl(null,Validators.required),
    'doctorsName': new FormControl(null, Validators.required),
    'dateOfBirth': new FormControl(null),
    'phoneNumber': new FormControl(null,Validators.minLength(10))
  });

  onSubmit(){
    
  }
}
