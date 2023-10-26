import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/dto/Doctor';
import { DoctorService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  
  constructor(private doctorService : DoctorService){}

  doctors : Doctor[] = [];
  patient : Object = {}

  appointmentForm : FormGroup = new FormGroup({
    'patientName': new FormControl(null,Validators.required),
    'doctorsName': new FormControl(null, Validators.required),
    'dateOfBirth': new FormControl(null),
    'phoneNumber': new FormControl(null,Validators.minLength(10))
  });

  onSubmit(){
    
  }

  ngOnInit(){
    this.doctorService.getDoctors().subscribe((response)=>{this.doctors = response},(error)=>{console.log(error)});
  }
}
