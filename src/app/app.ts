import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/header/header";
import { Footer } from "./layouts/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styles:`
    h1{
      color:blue;
      font-size: 64px
    }
  `
})
export class App {
  // protected readonly title = signal('wd20204');
  title = "WD20204"
  show:boolean = false
  handleClick=()=>{
    this.show= !this.show
  }
}
