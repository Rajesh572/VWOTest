import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VWOTest';
  subscribed: boolean;
  showText = 'Subscribed';
  clicked() {
    this.subscribed = true;
    setTimeout(() => {
      this.subscribed = false;
    }, 2000);
  }
}
