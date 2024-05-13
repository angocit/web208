import { Component, Input } from '@angular/core';
import { IProductLite } from '../../../interface/product';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrl: './product-one.component.css'
})
export class ProductOneComponent {
  @Input() product:IProductLite = {} as IProductLite
}
