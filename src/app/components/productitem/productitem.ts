import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { IProduct } from '../../interface/product';
@Component({
  selector: 'app-productitem',
  imports: [],
  templateUrl: './productitem.html',
  styleUrl: './productitem.css',
})
export class Productitem {
  @Input() product:IProduct = {} as IProduct
  @Output() addtocart:EventEmitter<number> = new EventEmitter()
  handleAddTocart = (id:number)=>{
    // Đẩy dữ liệu ra component cha
    this.addtocart.emit(id)
  }
}
