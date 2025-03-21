import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { IProduct, ProductLite } from './interface/product';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import axios from "axios"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,FooterComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = ''
  image = ''
  price = 0
  show = false;
  products:ProductLite[] = []
  showhide = ()=>{
    this.show = !this.show
  }
  onSubmit = async()=>{
      const data = {title:this.title,image:this.image,price:this.price}
      try {
          await axios.post(`http://localhost:3000/products`,data)
          alert("Thêm mới thành công")
          this.getAllProduct()
      } catch (error) {
        console.log(error);        
      }
  }
  getAllProduct = async()=>{
    try {
      const {data} = await axios.get(`http://localhost:3000/products`)
      this.products = data
  } catch (error) {
    console.log(error);        
  }
  }
  onDelete = async(id:number)=>{
      if (confirm("Bạn chắc chứ?")){
        try {
          await axios.delete(`http://localhost:3000/products/${id}`)
          alert("Xóa thành công")
          this.getAllProduct()
      } catch (error) {
        console.log(error);        
      }
      }
  }
}
