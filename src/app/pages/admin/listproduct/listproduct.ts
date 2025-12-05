import { Component, inject } from '@angular/core';
import { IProduct } from '../../../interface/product';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterModule } from "@angular/router";
import { ProductService } from '../../../services/product';

@Component({
  selector: 'app-listproduct',
  imports: [RouterLink,RouterModule],
  templateUrl: './listproduct.html',
  styleUrl: './listproduct.css',
})
export class Listproduct {
    products:IProduct[] = []
    productservice = inject(ProductService)
    ngOnInit(){
      this.productservice.GetAllProduct().subscribe({
        next:value=>{
           this.products=value
        }
      })
    }
    handleDelete = (id:number)=>{
        if (!confirm("Bạn chắc chứ?")) return;
        this.productservice.DeleteProduct(id).subscribe({
          next:()=>{
            this.products = this.products.filter(item=>item.id!=id)
            alert("Xóa thành công")
          },
          error:()=>{
            alert("Xóa thất bại")
          }
        })
    }
}
