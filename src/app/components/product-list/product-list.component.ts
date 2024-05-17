import { Component, Input } from '@angular/core';
import { IProductLite } from '../../../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
//  @Input() products:IProductLite[] = []
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
}
