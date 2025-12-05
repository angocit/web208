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
  http = inject(HttpClient)
  productFrm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(6)]),
    image: new FormControl("",Validators.required),
    price: new FormControl(0)
  })
  handleSubmit =()=>{
    if (!this.productFrm.valid) return // không cho thực hiện tiếp
    // console.log(this.productFrm.value);  
    const data = this.productFrm.value
    // Sử dụng httpClient để call API 
    this.http.post("http://localhost:3000/products",data).subscribe(
      {
        next: (data)=>{
          // console.log(data);
          alert("Thêm mới thành công")          
        },
        error: (err)=>{
          console.log(err);          
        },
        complete: ()=>{
          console.log("Hoàn thành");          
        }
      }
    )
  }
}
