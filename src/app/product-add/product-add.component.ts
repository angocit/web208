import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../interface/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  constructor(private productService: ProductService){}
  // Tạo formgroup
  productform = new FormGroup({
    name: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    category:new FormControl(),
    price: new FormControl(0)
  })
  router = new Router()
  category:any[] = []
  ngOnInit(){
    console.log('sdfsdfs');
      this.productService.GetAllCategory().subscribe(
        data=>{
          this.category = data
          console.log(data);
          
        },
        err=>{
          console.log(err);          
        }
      )
  }
  onAddProduct =()=>{
    const data = this.productform.value as IProduct
    this.productService.AddProduct(data).subscribe(
      data=>{
          alert('Thêm sản phẩm thành công')
          this.router.navigate(['product'])
      },
      err=>{
          console.log(err);
          
      }
    )
  }
}
