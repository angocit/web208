import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IProduct } from '../../../interfaces/product';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-productlist',
  imports: [RouterLink],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
  products:IProduct[] = []
  cdr = inject(ChangeDetectorRef)
  async ngOnInit(){
      const res = await fetch('http://localhost:3000/products')
      this.products = await res.json()
      this.cdr.markForCheck()
  }
}
