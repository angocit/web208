import { Component, Input } from '@angular/core';
import { IProductLite } from '../../../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
 @Input() products:IProductLite[] = []
}
