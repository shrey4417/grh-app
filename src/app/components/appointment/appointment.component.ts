import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/dto/Appointment';
import { Doctor } from 'src/app/dto/Doctor';
import { DoctorService } from 'src/app/service/doctor-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  constructor(private doctorService: DoctorService, private userService: UserService) { }

  doctors: Doctor[] = [];
  appointment !: Appointment;
  show_unsuccess_alert : boolean = false;
  save_button = 'save';

  public loading$ = this.userService.loading.asObservable()

  appointmentForm: FormGroup = new FormGroup({
    'patientName': new FormControl(null, Validators.required),
    'doctorsName': new FormControl(null, Validators.required),
    'dateOfBirth': new FormControl(null),
    'phoneNumber': new FormControl(null, Validators.minLength(10))
  });

  onSubmit() {
    this.appointment = this.appointmentForm.value;
    this.userService.bookAppointment(this.appointment).subscribe(
      (response: any) => { 
        this.save_button = 'saved';
        console.log(response); 
      },
      (error: any) => {
        this.show_unsuccess_alert = true;
        this.save_button = 'retry';
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.doctorService.getDoctors().subscribe((response) => { this.doctors = response }, (error) => { console.log(error) });
  }
}
