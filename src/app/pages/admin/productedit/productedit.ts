import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../interface/product';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-productedit',
  imports: [ReactiveFormsModule,NzFormModule,NzInputModule,NzButtonModule],
  templateUrl: './productedit.html',
  styleUrl: './productedit.css',
})
export class Productedit {
  productform = new FormGroup({
    name: new FormControl('',Validators.required),
    image:new FormControl(''),
    price: new FormControl(0,[Validators.required,Validators.min(1000)])
  })
   message = inject(NzMessageService)
  route = inject(ActivatedRoute)
  router = new Router()
  product:IProduct = {} as IProduct
  changdt = inject(ChangeDetectorRef)
  http = inject(HttpClient)
  id = this.route.snapshot.params['id']
  ngOnInit(){
    this.http.get<IProduct>(`http://localhost:3000/products/${this.id}`).subscribe({
        next:(data)=>{
          // Gán cả
            // this.productform.setValue(data)
            // Gán từng field một
            this.productform.controls.name.setValue(data.name)
            this.productform.controls.price.setValue(data.price)
            this.productform.controls.image.setValue(data.image)
        },
        error:(err)=>{
          console.log(err);          
        }
    })
  }
  onSubmit = ()=>{
      // Lấy data từ form
      const productdata = this.productform.value
      // console.log(productdata);
      this.http.put(`http://localhost:3000/products/${this.id}`,productdata).subscribe({
        next: (data)=>{
          console.log(data);
          // alert("Thêm thành công")
          this.message.success("Cập nhật thành công")
          this.router.navigate(['/admin/products'])
        },
        error:(err)=>{
          console.log(err);
          // alert("Thêm thất bại")  
          this.message.error("Cập nhật thất bại")        
        }
      })      
  }
}
