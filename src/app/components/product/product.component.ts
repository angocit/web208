import { Component, Input, OnInit } from '@angular/core';
import { IProduct, IProductLite } from '../../interface/product';
import axios from 'axios';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products:IProduct[] = []
  async ngOnInit(){
    const {data} = await axios.get('https://dummyjson.com/products?skip=0&limit=10')
    this.products = data.products
    console.log(this.products);
    // console.log('sfsdfsd')
  }
}
