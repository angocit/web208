import { Component, Input, inject } from '@angular/core';
import { IProduct } from '../../interface/product';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product:IProduct = {} as IProduct
  // constructor(private route:ActivatedRoute){

  // }
  route = inject(ActivatedRoute)
  name:string = '';
  image:string = ''
  price:number=0
  onClick=async ()=>{
    // alert('Clicked')
    // console.log(this.name,this.image,this.price);
    // const {data} = await axios.post('http://localhost:3000/products',
    // {
    //   name:this.name,
    //   image:this.image,
    //   price:this.price
    // })
    console.log(this.route.snapshot.params['slug']);
    
  }
}
