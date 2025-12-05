import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../interface/product';

@Component({
  selector: 'app-editproduct',
  imports: [ReactiveFormsModule],
  templateUrl: './editproduct.html',
  styleUrl: './editproduct.css',
})
export class Editproduct {
  http = inject(HttpClient)
  productFrm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(6)]),
    image: new FormControl("",Validators.required),
    price: new FormControl(0)
  })
  route = inject(ActivatedRoute)
  productid = this.route.snapshot.params["id"]
  router = new Router()
  ngOnInit(){
      this.http.get<IProduct>(`http://localhost:3000/products/${this.productid}`).subscribe({
        next: (data)=>{
            // this.productFrm.setValue(data)
            this.productFrm.controls.name.setValue(data.name)
            this.productFrm.controls.image.setValue(data.image)
            this.productFrm.controls.price.setValue(data.price)
        },
        error: (err)=>console.log(err)        
      })
  }
  handleSubmit = ()=>{
      if (!this.productFrm.valid) return // không cho thực hiện tiếp
    // console.log(this.productFrm.value);  
    const data = this.productFrm.value
    // Sử dụng httpClient để call API 
    this.http.put(`http://localhost:3000/products/${this.productid}`,data).subscribe(
      {
        next: (data)=>{
          // console.log(data);
          alert("Cập nhật thành công")         
          this.router.navigate(['/admin/products']) 
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
