import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../interface/product';

@Component({
  selector: 'app-productitem',
  imports: [],
  templateUrl: './productitem.html',
  styleUrl: './productitem.css',
})
export class Productitem {
  @Input() product:IProduct = {} as IProduct
  @Output() addtocart:EventEmitter<string> = new EventEmitter()
  HandleClick = (name:string)=>{
    this.addtocart.emit(name)
  }
}
