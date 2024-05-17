import { Component, Input } from '@angular/core';
import { IProductLite } from '../../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // @Input() products:IProductLite[] = [];
  display:boolean = true;
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
