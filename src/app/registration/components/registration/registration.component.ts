import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output()
  registration = new EventEmitter();

  toggleFunc() {
    this.registration.emit('login');
  }

}
