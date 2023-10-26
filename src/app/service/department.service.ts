import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../dto/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  private url = 'http://localhost:8080/'

  getDepartments() {
    return this.http.get<Department[]>(this.url + 'departments');
  }

  constructor(private http:HttpClient) { }
}
