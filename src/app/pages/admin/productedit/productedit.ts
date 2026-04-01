import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IProduct } from '../../../interfaces/product';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-productedit',
  imports: [ReactiveFormsModule,NzFormModule,NzButtonModule,NzCheckboxModule,NzInputModule],
  templateUrl: './productedit.html',
  styleUrl: './productedit.css',
})
export class Productedit {
  productform = new FormGroup({
    name: new FormControl('',Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl(0,[Validators.required,Validators.min(1000)])
  })
  routes = inject(ActivatedRoute)
  http = inject(HttpClient)
  message = inject(NzMessageService)
  id = this.routes.snapshot.params["id"]
  ngOnInit(){
    this.http.get<IProduct>(`http://localhost:3000/products/${this.id}`).subscribe({
        next: (data)=>{
            this.productform.controls.name.setValue(data.name)
            this.productform.controls.image.setValue(data.image)
            this.productform.controls.price.setValue(data.price)
        },
        error: (err)=>{
          console.log(err);          
        }
    })    
  }
  route = new Router()
  handleSubmit(){
    const productdata = this.productform.value
     this.http.put(`http://localhost:3000/products/${this.id}`,productdata).subscribe({
        next: (data)=>{
          console.log(data);
          // alert("Thêm mới thành công")
          this.message.success("Cập nhật thành công")
          this.route.navigate(['/admin/products'])
        },
        error:(err)=>{
          console.log(err);          
        }
     })    
  }
}
