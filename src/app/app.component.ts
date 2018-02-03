import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Customer Service Chat';

  toggleComponent = false;
  toggle(event) {
    console.log('event', event);
    this.toggleComponent = !this.toggleComponent;
  }
}
