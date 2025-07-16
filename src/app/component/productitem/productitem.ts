import { Component, Input } from '@angular/core';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-productitem',
  imports: [],
  templateUrl: './productitem.html',
  styleUrl: './productitem.css'
})
export class Productitem {
   @Input() product:IProduct = {}as IProduct
}
