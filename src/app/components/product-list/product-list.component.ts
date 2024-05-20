import { Component, Input } from '@angular/core';
import { IProduct, IProductLite } from '../../../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
//  @Input() products:IProductLite[] = []
  products:IProduct[] = [];
  async ngOnInit() {
     const response = await fetch('https://dummyjson.com/products')
     const data = await response.json()
     console.log(data); 
     this.products = data.products    
  }
}
