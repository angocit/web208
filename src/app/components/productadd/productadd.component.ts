import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {
    constructor(private productService:ProductService){}
    productform = new FormGroup({
       name: new FormControl('',[Validators.required,Validators.minLength(6)]),
       image:new FormControl('',Validators.required),
       price:new FormControl('',Validators.required),
       category:new FormControl('',Validators.required)
    })
    onSubmit=()=>{
      if (this.productform.valid){
        // console.log(this.productform.value); 
        const data:IProduct = this.productform.value as any
        this.productService.AddProduct(data).subscribe
        (
          data=>{
              console.log(data);
              
          },
          error=>{
            console.log(error);
            
          }
        )
      }
      else {
        alert('Bạn cần nhập đầy đủ thông tin')
      }        
    }
}
