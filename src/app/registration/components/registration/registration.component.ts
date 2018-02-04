import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{

  validationMessages = [
    'User already exists !!!!',
    'Email already used !!!!'
  ];

  constructor(private authenticationService : AuthenticationService){
  }

  register(e, email, pass){
    e.preventDefault();
    this.authenticationService.register(email.value, pass.value);
  }

}
