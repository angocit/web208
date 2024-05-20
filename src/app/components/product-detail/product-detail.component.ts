import { Component, Input, inject } from '@angular/core';
import { IProduct } from '../../interface/product';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  // constructor(private route: ActivatedRoute){}
  route = inject(ActivatedRoute);
  // @Input() product: IProduct = {} as IProduct;
    product: IProduct = {} as IProduct
    name = 'ads'
   onClick = ()=>{
      console.log(this.route.snapshot.params['id']);
      
   }
   async ngOnInit(){
    const productid = this.route.snapshot.params['id']
    const {data} = await axios.get(`https://dummyjson.com/products/${productid}`)
    console.log(data);
    this.product = data
    
   }
}
