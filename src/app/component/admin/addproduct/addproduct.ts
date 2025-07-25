import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-addproduct',
  imports: [ReactiveFormsModule],
  templateUrl: './addproduct.html',
  styleUrl: './addproduct.css'
})
export class Addproduct {
 productform = new FormGroup({
  ten_san_pham: new FormControl("",[Validators.required,Validators.minLength(6)]),
  hinh_anh:new FormControl("",Validators.required),
  gia_tien:new FormControl(0,[Validators.required,Validators.min(1000)])
 })
 validateStatus:boolean =true
 OnSubmit = async ()=>{
  // Dữ liệu từ form
  const productdata = this.productform.value 
  if (!this.productform.valid){
    // alert("Tên sản phẩm không để trống")
    this.validateStatus = false
      return;
  }
  try {
      const {data} = await axios.post(`http://localhost:3000/products`,productdata)
      alert("Thêm mới thành công")
  } catch (error:any) {
    alert("Thêm mới thất bại. Lỗi"+error.message)
  }
    // console.log(productdata);
 }
}
