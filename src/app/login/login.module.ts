import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {SharedModule} from '../shared/shared.module';
import {AuthenticationService} from '../services/authentication.service';
import {RouterModule} from '@angular/router';
import {RoutingModule} from '../router/routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RoutingModule
  ],
  declarations: [LoginComponent],
  providers: [AuthenticationService],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
