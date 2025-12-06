import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IProduct } from '../../../../interface/product';
import { RouterLink } from "@angular/router";
import { ProductService } from '../../../services/product';

@Component({
  selector: 'app-productlist',
  imports: [RouterLink],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
  productservice = inject(ProductService)
  products:IProduct[] = []
  ngOnInit(){
    this.productservice.GetALL().subscribe({
      next: (data)=>this.products = data,
      error:(err)=>console.log(err)      
    })
  }
  handleDelete = (id:number)=>{
    if (!confirm("Bạn chắc chứ?")) return;
    this.productservice.Delete(id).subscribe({
      next:()=>{
        this.products=this.products.filter(item=>item.id!=id)
        alert("Xóa thành công")
      },
      error:()=>alert("Xóa không thành công")
    })
  }
}
