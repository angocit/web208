import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../interfaces/product';

@Component({
  selector: 'app-productdetail',
  imports: [],
  templateUrl: './productdetail.html',
  styleUrl: './productdetail.css',
})
export class Productdetail {
  route = inject(ActivatedRoute)
  product:IProduct = {} as IProduct
  cdr = inject(ChangeDetectorRef)
  async ngOnInit(){
    const id = this.route.snapshot.params['id']
      const res = await fetch(`http://localhost:3000/products/${id}`)
      this.product = await res.json()
      this.cdr.markForCheck()
  }
}
