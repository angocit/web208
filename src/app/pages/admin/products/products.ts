import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../../interface/product';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpClient } from '@angular/common/http';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-products',
  imports: [RouterLink,NzTableModule,NzButtonModule,NzPopconfirmModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  route = inject(ActivatedRoute)
  products:IProduct[] = []
  changdt = inject(ChangeDetectorRef)
  http = inject(HttpClient)
  ngOnInit(){
    this.http.get<IProduct[]>(`http://localhost:3000/products`).subscribe({
      next: (data)=>{
        this.products = data
        this.changdt.markForCheck()
      },
      error:(err)=>{
          console.log(err);          
      }
    })    
  }
  message = inject(NzMessageService)
  handleDelete = (id:number)=>{
    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: ()=>{
        this.message.success("Xóa thành công")
        this.products = this.products.filter(item=>item.id!=id)
         this.changdt.markForCheck()
      },
      error:()=>{
        this.message.error("Xóa thất bại")
      }
    })
  }
}
