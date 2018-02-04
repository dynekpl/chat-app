import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {RoutingModule} from '../router/routing.module';
import {AuthenticationService} from '../services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RoutingModule
  ],
  declarations: [RegistrationComponent],
  providers: [AuthenticationService],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
