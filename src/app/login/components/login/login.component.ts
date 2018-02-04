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

  @Output()
  login = new EventEmitter();

  toggleFunc() {
    this.login.emit('registration');
  }

  logIn(e){
    e.preventDefault(); // żeby się strona nie przeładowywała
    this.authenticationService.logIn();
  }

}
