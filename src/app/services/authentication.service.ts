import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class AuthenticationService {

  constructor() {
  }

  observer: Observer<any>;
  registrated = [];
  loggedUser = [];

  logIn(email, pass) {
    const users = this.getUsers();
    let result = [];
    if(users !== null){
      result = users.filter(e => {
        return e.email === email && e.pass === pass;
      });
    }
    if(result.length){
      console.log('login');
      this.loggedUser.push(email);
      localStorage.setItem('logged', 'true');
      this.observer.next(true);
    }
    else{
      console.log('User nox exist!');
    }
  }

  private getUsers() {
    return JSON.parse(localStorage.getItem('registrated'));
  }

  logOut() {
    console.log('logout');
    this.loggedUser = [];
    localStorage.setItem('logged', 'false');
    this.observer.next(false);
  }

  loginStatus() {
    return this.createObservable();
  }

  loginCheck() {
    console.log('check');
    if (localStorage.getItem('logged') === 'true') {
      return true;
    }
    return false;
  }

  register(email, pass) {
    const users = this.getUsers();
    let result = [];
    if(users !== null){
      result = users.filter(e => {
        return e.email === email;
      });
    }
    if(result.length){
      console.log('User already exist!');
    }
    else{
      console.log('register');
      this.registrated.push({'email':email, 'pass':pass});
      const regist = JSON.stringify(this.registrated);
      localStorage.setItem('registrated', regist);
    }
  }

  removeUser(){
    const users = this.getUsers();
    const result = users.map(e => {
      return e.email === this.loggedUser[0] ? {} : e;
    });
    localStorage.clear();
    localStorage.setItem('registrated', JSON.stringify(result));
    this.logOut();
  }

  createObservable(): Observable<any> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }
}
