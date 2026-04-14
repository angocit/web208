import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../../interface/product';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpClient } from '@angular/common/http';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductService } from '../../../services/product';
@Component({
  selector: 'app-products',
  imports: [RouterLink,NzTableModule,NzButtonModule,NzPopconfirmModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  route = inject(ActivatedRoute)
  products = signal<IProduct[]>([])
  changdt = inject(ChangeDetectorRef)
  // http = inject(HttpClient)
  productservice = inject(ProductService)
  ngOnInit(){
    this.productservice.getAll().subscribe({
      next: (data)=>{
        // this.products = data
        this.products.set(data)
        // this.changdt.markForCheck()
      },
      error:(err)=>{
          console.log(err);          
      }
    })    
  }
  message = inject(NzMessageService)
  handleDelete = (id:number)=>{
    this.productservice.Delete(id).subscribe({
      next: ()=>{
        this.message.success("Xóa thành công")
        // this.products = this.products.filter(item=>item.id!=id)
        //  this.changdt.markForCheck()
        this.products.update((oldproduct)=>oldproduct.filter(item=>item.id!=id))
      },
      error:()=>{
        this.message.error("Xóa thất bại")
      }
    })
  }
}
