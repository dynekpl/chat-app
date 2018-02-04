import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from '../login/components/login/login.component';
import {RegistrationComponent} from '../registration/components/registration/registration.component';

const ROUTES = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
