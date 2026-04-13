import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { IProduct } from '../../../interfaces/product';
import { RouterLink } from "@angular/router";
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { Product } from '../../../services/product';
@Component({
  selector: 'app-productlist',
  imports: [RouterLink,NzPopconfirmModule,NzTableModule,NzButtonModule],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
  products = signal<IProduct[]>([])
  cdr = inject(ChangeDetectorRef)
  http = inject(HttpClient)
  message = inject(NzMessageService)
  productservice = inject(Product)
  ngOnInit(){
      // const res = await fetch('http://localhost:3000/products')
      // this.products = await res.json()
      // this.cdr.markForCheck()
      // Gọi service lấy danh sách sản phẩm
      this.productservice.getAll().subscribe({
        next:(data)=>{
            // this.products =data
            this.products.set(data)
        }
      })
  }
  handleDelete = (id:number)=>{
      // // if (!confirm("Bạn thực sự muốn xóa?")) return;
      // this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      //   next: (data)=>{
      //     this.message.success("Xóa thành công")
      //     this.products = this.products.filter(item=>item.id!=id)
      //     this.cdr.markForCheck()
      //   },
      //   error:(err)=>{
      //     console.log(err);
          
      //     this.message.error("Xóa thất bại")
      //   }
      // })
      this.productservice.Delete(id).subscribe({
        next:()=>{
          this.message.success("Xóa thành công")
          // this.products = this.products.filter(item=>item.id!=id)
          this.products.update(oldproducts=>oldproducts.filter(item=>item.id!=id))
        },
        error:()=>{
          this.message.error("Xóa thất bại")
        }
      })
  }
}
