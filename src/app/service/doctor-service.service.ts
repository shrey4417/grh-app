import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../dto/Doctor';
import { CatalogService } from './catalog.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {
  }


  getDoctors() {
    return this.http.get<Doctor[]>(CatalogService.url+'doctors');
  }

  findDoctorByDepartment(value: string) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("dept",value);  
    // debugger;
    return this.http.get<Doctor[]>(CatalogService.url + 'findDoctorByDepartment',{params : queryParams});
  }

}
