import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/client/header/header";
import { Slide } from "./component/slide/slide";
import axios from 'axios'
import { IProduct } from './interface/product';
import { Showproduct } from "./component/showproduct/showproduct";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Slide, Showproduct],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
