import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../interface/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {
  constructor(private productService: ProductService,private route:ActivatedRoute){}
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
    this.productService.GetAllCategory().subscribe(
      data=>{
        this.category = data
        console.log(data);
        
      },
      err=>{
        console.log(err);          
      }
    )
    const productid = this.route.snapshot.params['id']
     this.productService.GetProductByID(productid).subscribe(
      data=>{
          // console.log(data);
          this.productform.controls.name.setValue(data.name)
          this.productform.controls.image.setValue(data.image)
          this.productform.controls.price.setValue(data.price)
          this.productform.controls.category.setValue(data.category)
      },
      error=>{
        console.log(error);
        
      }
     ) 
  }
  onUpdateProduct =()=>{
    const productid = this.route.snapshot.params['id']
    const data = this.productform.value as IProduct
    this.productService.UpdateProduct(data,productid).subscribe(
      data=>{
          alert('Cập nhật thành công')
          this.router.navigate(['product'])
      },
      err=>{
          console.log(err);
          
      }
    )
  }
}
