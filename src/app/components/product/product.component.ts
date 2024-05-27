import { Component, Input, OnInit } from '@angular/core';
import { IProduct, IProductLite } from '../../interface/product';
import axios from 'axios';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  constructor(private productService: ProductService){}
  producform = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(6)]),
      image: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(1000)
  })
  products:IProduct[] = []
  async ngOnInit(){
    this.productService.Get_All_Products().subscribe(data=>{
      this.products = data
  })
  }
  async onSubmit(){
    if (this.producform.valid) {
      console.log(this.producform.value);
      this.productService.AddProduct(this.producform.value as IProduct).subscribe(data=>{
          // console.log(data);
          this.products.push(data);
      })
    } 
  }
}
