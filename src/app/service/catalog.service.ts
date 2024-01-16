import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  public static url  = 'http://localhost:8080/api/hospital/';
}
