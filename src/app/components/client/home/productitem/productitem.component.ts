import { Component, Input } from '@angular/core';
// import { IProduct, ProductLite } from '../../interface/product';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductLite } from '../../../../interface/product';

@Component({
  selector: 'app-productitem',
  imports: [CommonModule,FormsModule],
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.css'
})
export class ProductitemComponent {
    @Input() product:ProductLite = {} as ProductLite
    @Input() name:string = ''
    onDelete = async(id:number)=>{
      if (confirm("Bạn chắc chứ?")){
        try {
          await axios.delete(`http://localhost:3000/products/${id}`)
          alert("Xóa thành công")
          // this.getAllProduct()
      } catch (error) {
        console.log(error);        
      }
      }
  }
}
