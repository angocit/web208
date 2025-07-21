import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { IProduct } from '../../../interface/product';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {
  route = inject(ActivatedRoute)
  productid = this.route.snapshot.params["id"]
  product:IProduct = {} as IProduct
  ngOnInit(){
    console.log(this.route.snapshot); 
    this.getProductById(this.productid)      
  }
  getProductById = async (id:number)=>{
    try {
      const {data} = await axios.get(`http://localhost:3000/products/${id}`)
      this.product = data
    } catch (error) {
      
    }
  }
}
