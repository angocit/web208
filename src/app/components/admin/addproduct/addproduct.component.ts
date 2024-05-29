import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {IProduct} from '../../../interface/product'
import axios from 'axios';
import { ProductsService } from '../../../products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})

export class AddproductComponent {
  products:IProduct[] = []
  constructor(private productService:ProductsService){}
  productform = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
    image: new FormControl(''),
    cat_id: new FormControl(1),
    price: new FormControl(1000,Validators.min(2000))
  })
  ngOnInit(){
    console.log('sdfdsf');
    
    this.productService.Get_All_Products().subscribe(data=>{
      // console.log(data);
      this.products = data
    })
  }
   onSubmit=async () => {
    const productdata = this.productform.value as IProduct
    this.productService.add_Product(productdata).subscribe(data=>{
        alert('Thêm thành công')
        this.products.push(data)
    })
  }
}
