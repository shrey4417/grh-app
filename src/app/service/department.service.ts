import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../dto/Department';
import { CatalogService } from './catalog.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  

  getDepartments() {
    return this.http.get<Department[]>(CatalogService.url + 'departments');
  }

  constructor(private http:HttpClient) { }
}
