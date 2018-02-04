import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Customer Service Chat';
  toggleComponent = false;
  logged = false;
  sub: Subscription;

  toggle(event) {
    console.log('event', event);
    this.toggleComponent = !this.toggleComponent;
  }

  constructor(private authenticationService : AuthenticationService){
  }

  ngOnInit() {
   this.logged =  this.authenticationService.loginCheck();

   this.sub = this.authenticationService.loginStatus()
     .subscribe((res) => {
       console.log(res);
     this.logged = res;
   });
  }

  logIn(){
    this.authenticationService.logIn();
  }

  logOut(){
    this.authenticationService.logOut();
  }
}

export interface Menu{
  name: string;
  link: string;
  icon: any;
  subMenu: Menu;
}
