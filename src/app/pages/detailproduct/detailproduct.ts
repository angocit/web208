import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../interface/product';

@Component({
  selector: 'app-detailproduct',
  imports: [],
  templateUrl: './detailproduct.html',
  styleUrl: './detailproduct.css',
})
export class Detailproduct {
  // constructor(private route:ActivatedRoute){
  // }
  route = inject(ActivatedRoute)
  productId = this.route.snapshot.params["id"]
  product:IProduct = {} as IProduct
  async ngOnInit(){
      try {
        const res = await fetch(`http://localhost:3000/products/${this.productId}`)
        this.product = await res.json()
      } catch (error) {
        console.log(error);        
      } 
  }
}
