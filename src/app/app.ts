import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/header/header";
import { Footer } from "./layouts/footer/footer";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from './interface/product';
import { Productitem } from './components/productitem/productitem';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
