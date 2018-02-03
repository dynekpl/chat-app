import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared/shared.component';
import {RegistrationComponent} from '../registration/components/registration/registration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
