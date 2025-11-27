import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  imports: [ReactiveFormsModule],
  templateUrl: './addproduct.html',
  styleUrl: './addproduct.css',
})
export class Addproduct {
  productfrm = new FormGroup({
    name: new FormControl("",Validators.required),
    category: new FormControl(),
    image: new FormControl("",Validators.required),
    price: new FormControl(0,[Validators.required,Validators.min(1000)])
  })
  http = inject(HttpClient)
  handleSubmit = ()=>{
      // lấy dữ liệu từ form
      if (!this.productfrm.valid) return;
      const data = this.productfrm.value
      // console.log(data);  
      this.http.post(`http://localhost:3000/products`,data).subscribe({
        next: (value)=>{
          console.log(value);          
          alert("Thêm mới thành công")       
        },
        error:(err)=>console.log(err),
        complete:()=>console.log('Hoàn thành')                
      })    
  }
}
