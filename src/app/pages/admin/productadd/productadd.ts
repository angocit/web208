import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
@Component({
  selector: 'app-productadd',
  imports: [ReactiveFormsModule,NzSelectModule,NzFormModule,NzInputModule,NzButtonModule],
  templateUrl: './productadd.html',
  styleUrl: './productadd.css',
})
export class Productadd {
  productform = new FormGroup({
    name: new FormControl('',Validators.required),
    image:new FormControl(''),
    category: new FormControl(0,Validators.min(1)),
    price: new FormControl(0,[Validators.required,Validators.min(1000)])
  })
  http = inject(HttpClient)
  message = inject(NzMessageService)
  route = new Router()
  onSubmit = ()=>{
      // Lấy data từ form
      const productdata = this.productform.value
      // console.log(productdata);
      this.http.post(`http://localhost:3000/products`,productdata).subscribe({
        next: (data)=>{
          console.log(data);
          // alert("Thêm thành công")
          this.message.success("Thêm mới thành công")
          this.route.navigate(['/admin/products'])
        },
        error:(err)=>{
          console.log(err);
          // alert("Thêm thất bại")  
          this.message.error("Thêm mới thất bại")        
        }
      })      
  }
}
