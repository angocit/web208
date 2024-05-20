import { Component, Input } from '@angular/core';
import { IProduct, IProductLite } from '../../interface/product';
import axios from 'axios';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // @Input() products:IProductLite[] = [];
  loading:boolean = true;
  products:IProduct[] = []
  async ngOnInit() {
      const {data} = await axios.get('https://dummyjson.com/products?skip=0&limit=12')
      console.log(data); 
      this.products = data.products  
      this.loading = false   
  }
}
