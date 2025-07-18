import { Component } from '@angular/core';
import axios from 'axios';
import { IProduct } from '../../interface/product';
import { Productitem } from '../productitem/productitem';

@Component({
  selector: 'app-showproduct',
  imports: [Productitem],
  templateUrl: './showproduct.html',
  styleUrl: './showproduct.css'
})
export class Showproduct {
  products:IProduct[] = []
  ngOnInit(){
    this.getAllProduct()
  }
  getAllProduct = async()=>{
    try {
        const {data} = await axios.get(`http://localhost:3000/products`)
        this.products = data
    } catch (error) {
      console.log(error);      
    }
  }
  onAddTocart = (product:IProduct)=>{
    // Dữ liệu từ component con đẩy ra
    console.log(product);
  }
}
