import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/header/header";
import { Footer } from "./layouts/footer/footer";
import { FormsModule } from '@angular/forms';
import { IProduct } from '../interface/product';
import { Productitem } from './conponents/productitem/productitem';
import { Slider } from "./components/slider/slider";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FormsModule, Productitem, Slider],
  templateUrl: './app.html',
  styles:`
    h1{
      color:blue;
      font-size: 64px
    }
  `
})
export class App {
    products:IProduct[] = []
    async ngOnInit(){
        try {
           const res = await fetch("http://localhost:3000/products")
           this.products = await res.json()
        } catch (error) {
            console.log(error);            
        }
    }
}
