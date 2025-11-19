import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  // constructor(private route:ActivatedRoute){

  // }
  route = inject(ActivatedRoute)
  id = this.route.snapshot.params["id"]
  product:IProduct = {} as IProduct
  async ngOnInit(){
      const res = await fetch(`http://localhost:3000/products/${this.id}`)
      const data = await res.json()
      this.product = data
    }
}
