import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-productadd',
  imports: [ReactiveFormsModule],
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {
  productform = new FormGroup({
    name: new FormControl(""),
    image: new FormControl(""),
    price: new FormControl(0)
  })
  onSubmit = async()=>{
      // Lấy dữ liệu từ form
      console.log(this.productform.value);  
      try {
          const {data} = await axios.post("http://localhost:3000/products",this.productform.value)
          alert("Thêm mới thành công")
        } catch (error) {
        
      }    
  }
}
