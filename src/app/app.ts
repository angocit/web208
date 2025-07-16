import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
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
  protected title = 'wd20105';
  products:IProduct[] = []
  ngOnInit(){
    this.title = "Giá trị mới"
    this.getAllProducts()
  }
  getAllProducts = async ()=>{
    try {
        const {data} = await axios.get(`http://localhost:3000/products`)
        console.log(data);        
        this.products=data
    } catch (error) {
      
    }
  }
}
