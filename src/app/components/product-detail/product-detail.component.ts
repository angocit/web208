import { Component, Input, inject } from '@angular/core';
import { IProduct } from '../../../interface/product';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  // constructor(private route: ActivatedRoute){

  // }
  route = inject(ActivatedRoute)
  product:IProduct = {} as IProduct
  // productname:string = ''
  // image:string = ''
  // price:number = 0
  onClick=async ()=>{
      // const {data} = await axios.post('http://localhost:3000/products',{
      //   name:this.productname,
      //   image:this.image,
      //   price: this.price
      // })
      console.log(this.route.snapshot.params['slug']);   

  }
  async ngOnInit(){
    const productid = this.route.snapshot.params['id']
    // console.log(this.route.snapshot);
    
    const response = await fetch(`https://dummyjson.com/products/${productid}`)
    this.product = await response.json()
  }
  onChangeImg = (url:string)=>{
    this.product.thumbnail = url
  }
}
