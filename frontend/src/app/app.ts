import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/header/header";
import { Footer } from "./layouts/footer/footer";
import { FormsModule } from '@angular/forms';
import { IProduct } from '../interface/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styles:`
    h1{
      color:blue;
      font-size: 64px
    }
  `
})
export class App {
}
