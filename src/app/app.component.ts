import { Component, VERSION } from '@angular/core';
import { users } from './users';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  currentDate = new Date();
  today: number = Date.now();

  a: number = 0.259;
  b: number = 1.3495;
  user = {
    id: 1,
    firstName: 'Flora',
    lastName: 'Twell',
    email: 'ftwell0@phoca.cz',
    gender: 'Female',
    ipAddress: '99.180.237.33',
  };

  users = users;

  AddUser() {
    this.users = [
      ...this.users,
      {
        id: 5,
        firstName: 'Flora',
        lastName: 'Twell',
        email: 'ftwell0@phoca.cz',
        gender: 'Male',
        ipAddress: '99.180.237.33',
      },
    ];
  }
}
