import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Observer} from 'rxjs/Observer';

@Injectable()
export class AuthenticationService {

  constructor() { }

  observer : Observer<any>;
  registrated = [];

  logIn(){
    console.log('login');
    localStorage.setItem('logged', 'true');
    this.observer.next(true);
  }

  logOut(){
    console.log('logout');
    localStorage.setItem('logged', 'false');
    this.observer.next(false);
  }

  loginStatus(){
    return this.createObservable();
  }

  loginCheck(){
    console.log('check');
    if (localStorage.getItem('logged') === 'true') {
      return true;
    }
    return false;
  }

  // register(){
  //   const regist = JSON.stringify(this.registrated);
  //   localStorage.setItem('registrated', regist);
  // }

  createObservable() : Observable<any> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }
}
