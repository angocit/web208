import { Component, Input, OnInit } from '@angular/core';
import { IProduct, IProductLite } from '../../interface/product';
import axios from 'axios';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  producform = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(6)]),
      image: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(1000)
  })
  // products:IProduct[] = []
  async ngOnInit(){
    // const {data} = await axios.get('https://dummyjson.com/products?skip=0&limit=10')
    // this.products = data.products
    // console.log(this.products);
    // // console.log('sfsdfsd')
  }
  async onSubmit(){
    if (this.producform.valid) {
      console.log(this.producform.value);
      const {data} = await axios.post('http://localhost:3000/products',this.producform.value)
      console.log(data);
    }
      
  }
}
