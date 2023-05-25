import { Target } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `<h1> hello world </h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Basic';

  changeText(e: KeyboardEvent) {
    this.text = (e.target as HTMLInputElement).value
  }
  text = "hello text"
  changeImage(e: KeyboardEvent) {
    this.imgURl = (e.target as HTMLInputElement).value
  }
  imgURl = 'https://www.shiftnow.org/storage/photos/1/teamMemberCarousel/tTI9TXeTyviKHHqeCzHboinnM8UJF6YGUzqbmR55.png'
  logImg (event: string) {
    console.log(event)
  }
  getName() {
    return this.title;
  }
  sayMessage() {
    alert("hello")
  }
}
