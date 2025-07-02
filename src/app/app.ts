import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Slide } from "./component/slide/slide";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Slide],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'wd20105';
}
