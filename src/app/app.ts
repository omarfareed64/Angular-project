import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet/>',
  //templateUrl: './app.html'
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Travel-site');
}
