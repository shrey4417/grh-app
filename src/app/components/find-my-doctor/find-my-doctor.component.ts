import { Component } from '@angular/core';

@Component({
  selector: 'app-find-my-doctor',
  templateUrl: './find-my-doctor.component.html',
  styleUrls: ['./find-my-doctor.component.css']
})
export class FindMyDoctorComponent {
  
  filteredResultsList : any[] = [];

  filterResults(value : string){
    console.log(value);
  }
}
