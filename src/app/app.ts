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
  // protected readonly title = signal('wd20204');
  title = "WD20204"
  show:boolean = false
  products:IProduct[]=[
		{ id: 1, name: "Áo thun basic", image: "images/ao-thun.jpg", price: 199000 },
		{ id: 2, name: "Quần jeans xanh", image: "images/quan-jeans.jpg", price: 349000 },
		{ id: 3, name: "Giày sneakers", image: "images/giay-sneakers.jpg", price: 599000 },
		{ id: 4, name: "Mũ lưỡi trai", image: "images/mu-luoi-trai.jpg", price: 129000 },
		{ id: 5, name: "Áo khoác denim", image: "images/ao-khoac-denim.jpg", price: 799000}
	]
  handleClick=()=>{
    this.show= !this.show
  }
addToCart=(value:string)=>{
  alert(value);  
}
}
