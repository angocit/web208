import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/header/header";
import { Footer } from "./layouts/footer/footer";
interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('wd20203');
  show:boolean = false
  products:IProduct[] = []
  handleClick=()=>{
    // alert("Bạn vừa click")
    this.show = !this.show
  }
  LoadProduct = async ()=>{
    try {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        this.products = data
    } catch (error) {
        console.log(error);        
    }
  }
  handleDelete = (id:number)=>{
    this.products = this.products.filter(product=>product.id!=id)
  }
}
