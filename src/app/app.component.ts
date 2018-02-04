import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Subscription} from 'rxjs/Subscription';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Customer Service Chat';
  logged = false;
  sub: Subscription;

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

  logOut(){
    this.authenticationService.logOut();
  }

  removeMe(){
    this.authenticationService.removeUser();
  }
}

export interface Menu{
  name: string;
  link: string;
  icon: any;
  subMenu: Menu;
}
