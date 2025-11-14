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
  imports: [RouterOutlet, Header, Footer,FormsModule,Productitem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('wd20203');
  constructor(){
    // this.LoadProduct()
    console.log("COnstructor");
    
  }
  show:boolean = false
  products:IProduct[] = []
  title = "WD20203"
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
  ngOnInit(){
    this.LoadProduct()
  }
  handleDelete = (id:number)=>{
    this.products = this.products.filter(product=>product.id!=id)
  }
  AddToCart = (data:number)=>{
    alert(`ID vừa thêm là: ${data}`)
  }
}
