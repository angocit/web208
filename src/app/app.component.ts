import { Component } from '@angular/core';
import { IProduct, IProductLite } from './interface/product';
import { IStudent } from './interface/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'web208';
  // product:IProduct = {
  //   "id": 1,
  //   "title": "iPhone 9",
  //   "description": "An apple mobile which is nothing like apple",
  //   "price": 549,
  //   "discountPercentage": 12.96,
  //   "rating": 4.69,
  //   "stock": 94,
  //   "brand": "Apple",
  //   "category": "smartphones",
  //   "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
  //   "images": [
  //     "https://cdn.dummyjson.com/product-images/1/1.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/2.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/3.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/4.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  //   ]
  // }
  students:IStudent[]=[
    {
      name:"SV 1",
      age:18,
      address:"Hà Nội",
      classname:"WD18336"
    },
    {
      name:"SV 2",
      age:19,
      address:"Hà Nội",
      classname:"WD18336"
    }
  ]
  addStudent=(data:IStudent)=>{
    this.students.push(data)
  }
  products:IProductLite[]=[
    {
      title:"Sản phẩm 1",
      thumbnail:"https://down-vn.img.susercontent.com/file/1234b2a2d4ccbcdc4357c818cf58a1f7",
      price:10000
    },
    {
      title:"Sản phẩm 2",
      thumbnail:"https://product.hstatic.net/1000078439/product/gia-treo-quan-ao-thong-minh_27ee3bf61bdd46c19bbc77950ea70bf5.jpg",
      price:10000
    }
  ]
}