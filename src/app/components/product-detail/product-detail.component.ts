import { Component } from '@angular/core';
import { IProduct } from '../../../interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productname:string = 'Sản phẩm 1'
  product:IProduct = {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ]
  }
  onClick=()=>{
      alert('Bạn vừa click')
  }
}
