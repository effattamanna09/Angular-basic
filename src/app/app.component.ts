import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `<h1> hello world </h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Basic';
  changeImage(e: KeyboardEvent) {
    this.imgURl = (e.target as HTMLInputElement).value
  }
  imgURl = 'https://www.shiftnow.org/storage/photos/1/teamMemberCarousel/tTI9TXeTyviKHHqeCzHboinnM8UJF6YGUzqbmR55.png'
  getName() {
    return this.title;
  }
  sayMessage() {
    alert("hello")
  }
}
