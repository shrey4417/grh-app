import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../dto/Appointment';
import { BehaviorSubject, finalize } from 'rxjs';
import { CatalogService } from './catalog.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isLoading(state: boolean): void { this.loading.next(state) }

  bookAppointment(appointment : Appointment) {
    this.isLoading(true);
    return this.http.post<any>(CatalogService.url + 'appointment', appointment).pipe(finalize(() => this.isLoading(false)));
  }

  constructor(private http:HttpClient) { }
}
