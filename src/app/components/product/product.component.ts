import { Component } from '@angular/core';
import { IProductLite } from '../../interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products:IProductLite[] = [
    {
      name:"Sản phẩm 1",
      image:"https://img.muji.net/img/item/4550344275726_1260.jpg",
      price:10000
    },
    {
      name:"Sản phẩm 2",
      image:"https://sunwatch.vn/image/catalog/Sunwatch/Seiko-clock/QXA638S.jpg",
      price:20000
    }
  ];
}
