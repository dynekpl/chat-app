import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validationMessages = [
    'Incorrect email !!!!',
    'Wrong emai !!!!'
  ];

  constructor() { }

  ngOnInit() {
  }

  @Output()
  login = new EventEmitter();

  @Output()
  logged = new EventEmitter();

  toggleFunc() {
    this.login.emit('registration');
  }

  logIn(){
    this.logged.emit(true);
  }

}
