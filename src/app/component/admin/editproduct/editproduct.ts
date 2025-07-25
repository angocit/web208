import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-editproduct',
  imports: [ReactiveFormsModule],
  templateUrl: './editproduct.html',
  styleUrl: './editproduct.css'
})
export class Editproduct {
  // Lấy id từ params
  params = inject(ActivatedRoute)
  id = this.params.snapshot.params["id"]
  productform = new FormGroup({
  ten_san_pham: new FormControl(""),
  hinh_anh:new FormControl(""),
  gia_tien:new FormControl(0)
 })
 ngOnInit(){
    this.getProductById()
 }
  getProductById = async ()=>{
    try {
      const {data} = await axios.get(`http://localhost:3000/products/${this.id}`)
      this.productform.controls.ten_san_pham.setValue(data.ten_san_pham)
      this.productform.controls.hinh_anh.setValue(data.hinh_anh)
      this.productform.controls.gia_tien.setValue(data.gia_tien)
    } catch (error) {
      
    }
  }
  OnSubmit = async ()=>{
    try {
      // Dữ liệu sản phẩm
      const productdata = this.productform.value
        const {data} = await axios.put(`http://localhost:3000/products/${this.id}`,productdata)
        alert("Cập nhật thành công")
    } catch (error:any) {
       alert("Cập nhật thất bại. lỗi: "+error.message)
    }
  }
}
