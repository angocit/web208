import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../../interface/product';

@Component({
  selector: 'app-editproduct',
  imports: [ReactiveFormsModule],
  templateUrl: './editproduct.html',
  styleUrl: './editproduct.css',
})
export class Editproduct {
  route = inject(ActivatedRoute)
  productid = this.route.snapshot.params["id"]
productfrm = new FormGroup({
    name: new FormControl("",Validators.required),
    category: new FormControl(),
    image: new FormControl("",Validators.required),
    price: new FormControl(0,[Validators.required,Validators.min(1000)])
  })
  http = inject(HttpClient)
  ngOnInit(){
    this.http.get<IProduct>(`http://localhost:3000/products/${this.productid}`).subscribe({
      next:value=>{
        this.productfrm.controls.name.setValue(value.name)
        this.productfrm.controls.category.setValue(value.category)
        this.productfrm.controls.image.setValue(value.image)
        this.productfrm.controls.price.setValue(value.price)
      }
    })
  }
  router = new Router()
  handleSubmit = ()=>{
      // lấy dữ liệu từ form
      if (!this.productfrm.valid) return;
      const data = this.productfrm.value
      // console.log(data);  
      this.http.put(`http://localhost:3000/products/${this.productid}`,data).subscribe({
        next: (value)=>{
          console.log(value);          
          alert("Cập nhật thành công") 
          this.router.navigate(['/admin/products'])      
        },
        error:(err)=>console.log(err),
        complete:()=>console.log('Hoàn thành')                
      })    
  }
}
