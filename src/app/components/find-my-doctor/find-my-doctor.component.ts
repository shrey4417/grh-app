import { Component } from '@angular/core';
import { Department } from 'src/app/dto/Department';
import { Doctor } from 'src/app/dto/Doctor';
import { DepartmentService } from 'src/app/service/department.service';
import { DoctorService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-find-my-doctor',
  templateUrl: './find-my-doctor.component.html',
  styleUrls: ['./find-my-doctor.component.css']
})
export class FindMyDoctorComponent {

  filteredResultsList: Doctor[] = [];
  departments: Department[] = [];

  filterResults(value: string) {
    this.doctorService.findDoctorByDepartment(value).subscribe((response)=>{this.filteredResultsList=response;},(error)=>{console.log(error)});
  }

  constructor(private doctorService: DoctorService, private departmentService: DepartmentService) { }

  ngOnInit() {
    console.log('inside ngInit')
    this.doctorService.getDoctors().subscribe(
      (response) => { this.filteredResultsList = response; },
      (error) => { console.log(error); }
    );

    this.departmentService.getDepartments().subscribe(
      (response) => { this.departments = response; },
      (error) => { console.log(error); }
    );
  }
}
