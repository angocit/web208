import { Component } from '@angular/core';
import { IProduct, IProductLite } from '../interface/product';
import { IStudent } from '../interface/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: `h1{text-transform:uppercase}`
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
  //   "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
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
      address:"HN",
      classname:"WD18337"
    },
    {
      name:"SV 2",
      age:19,
      address:"TN",
      classname:"WD18337"
    },
    {
      name:"SV 3",
      age:18,
      address:"HY",
      classname:"WD18337"
    }
  ]
  addStudent = (data:IStudent)=>{
    this.students.push(data);
  }
  products:IProductLite[]=[
    {
      title: "iPhone 9",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      price: 549
    },
    {
      title: "iPhone 10",
      thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      price: 549
    },
    {
      title: "iPhone 11",
      thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      price: 549
    },
    {
      title: "iPhone 12",
      thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      price: 549
    }
  ]
  addProduct = (data:IProductLite)=>{
    this.products.push(data);
  }
}
