import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IProduct } from '../../../interfaces/product';
import { RouterLink } from "@angular/router";
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-productlist',
  imports: [RouterLink,NzTableModule],
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
