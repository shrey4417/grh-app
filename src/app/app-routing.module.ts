import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FindMyDoctorComponent } from './components/find-my-doctor/find-my-doctor.component';
import { CareerComponent } from './components/career/career.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {path:'', component:BodyComponent},
  {path:'home', redirectTo:'/', pathMatch:'full'},
  {path:'find-my-doctor', component:FindMyDoctorComponent},
  {path:'career', component:CareerComponent},
  {path:'login', component:LoginComponent},
  {path:'error',component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
