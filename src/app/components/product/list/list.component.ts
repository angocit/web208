import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IProduct } from '../../../interface/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    constructor(private http:HttpClient){}
    products:IProduct[] = []
    ngOnInit(){
        this.http.get(`http://localhost:3000/products`).subscribe(
            (data:any)=>{
                // console.log(data); 
                this.products = data               
            },
            error=>{
              console.log(error);              
            }
        )
    }
    onDelete = (id:number|undefined)=>{
      if (confirm("Bạn chắc chứ?")){
        this.http.delete(`http://localhost:3000/products/${id}`).subscribe(
          (data:any)=>{
            const newproduct = this.products.filter(item=>item.id!=id)
            this.products = newproduct
            alert("Xóa thành công")
          },
          error=>{
            console.log(error);            
          }
        )
      }
    }
}
