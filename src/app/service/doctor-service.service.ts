import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../dto/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/'

  getDoctors() {
    return this.http.get<Doctor[]>(this.url+'doctors');
  }

  findDoctorByDepartment(value: string) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("dept",value);  

    return this.http.get<Doctor[]>(this.url + 'findDoctorByDepartment',{params : queryParams});
  }

}
