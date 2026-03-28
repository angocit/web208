import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../../interface/product';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-products',
  imports: [RouterLink,NzTableModule,NzButtonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  route = inject(ActivatedRoute)
  products:IProduct[] = []
  changdt = inject(ChangeDetectorRef)
  async ngOnInit(){
    // const keyword = this.route.snapshot.queryParams['keyword']
    // console.log(keyword);
    const res = await fetch(`http://localhost:3000/products`)
    this.products = await res.json()
    this.changdt.markForCheck()
  }
}
