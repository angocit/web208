import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  imports: [ReactiveFormsModule],
  templateUrl: './addproduct.html',
  styleUrl: './addproduct.css',
})
export class Addproduct {
  productFrm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(6)]),
    image: new FormControl("",Validators.required),
    price: new FormControl(0)
  })
  handleSubmit =()=>{
    if (!this.productFrm.valid) return // không cho thực hiện tiếp
    console.log(this.productFrm.value);    
  }
}
