import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Customer Service Chat';

  toggleComponent = false;

  logged = false;

  toggle(event) {
    console.log('event', event);
    this.toggleComponent = !this.toggleComponent;
  }

  ngOnInit() {
    if (localStorage.getItem('logged') === 'true') {
      this.logged = true;
    }
  }

  logIn(){
    localStorage.setItem('logged', 'true');
    this.logged = true;
  }

  logOut(){
    this.logged = false;
    localStorage.setItem('logged', 'false');
  }
}
