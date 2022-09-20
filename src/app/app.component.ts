import { Component, VERSION } from '@angular/core';

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
}
