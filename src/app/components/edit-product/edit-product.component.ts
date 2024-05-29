import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interface/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  constructor(private productService: ProductService,private router:ActivatedRoute){}
  producform = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
    image: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(1000)
})
productid = this.router.snapshot.params['id']
route = new Router()
async ngOnInit(){
  this.productService.Get_Products_By_ID(this.productid).subscribe(data => {
    console.log(data);
    this.producform.controls.name.setValue(data.name)
    this.producform.controls.image.setValue(data.image)
    this.producform.controls.category.setValue(data.category)
    this.producform.controls.price.setValue(data.price)
  })
}
async onSubmit(){
  if (this.producform.valid) {
      this.productService.EditProduct(this.productid,this.producform.value as IProduct)
      .subscribe(data=>{
        alert("Cập nhật thành công")
        this.route.navigate(['admin/product'])
      })  
  } 
}
}
