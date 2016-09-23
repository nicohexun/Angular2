import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <hero-list></hero-list>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
