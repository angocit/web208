import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-productadd',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {
  productform = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(6)]),
    image: new FormControl(""),
    price: new FormControl(0)
  })
  onSubmit = async()=>{
      // Lấy dữ liệu từ form
     if (this.productform.valid){
      try {
          const {data} = await axios.post("http://localhost:3000/products",this.productform.value)
          alert("Thêm mới thành công")
        } catch (error) {
        
      } 
    }   
  }
}
