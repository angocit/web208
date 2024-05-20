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
  product:IProduct = {} as IProduct
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
    console.log(this.route.snapshot.params['id']);
    
  }
  async ngOnInit(){
    const productid = this.route.snapshot.params['id']
      const {data} = await axios.get(`https://dummyjson.com/products/${productid}`)
      // console.log(data);
      this.product = data
      
  }
}
