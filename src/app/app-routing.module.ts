import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FindMyDoctorComponent } from './components/find-my-doctor/find-my-doctor.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'find-my-doctor', component:FindMyDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
