import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  validationMessages = [
    'Incorrect email !!!!',
    'Wrong email !!!!'
  ];

  constructor(private authenticationService : AuthenticationService){
  }

  logIn(e, email, pass){
    e.preventDefault(); // żeby się strona nie przeładowywała
    this.authenticationService.logIn(email.value, pass.value);
  }

}
