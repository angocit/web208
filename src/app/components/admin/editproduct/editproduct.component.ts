import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {
  // router = inject(Router)
  constructor(private router: ActivatedRoute){

  }
   productform = new FormGroup({
    name: new FormControl('',[Validators.required]),
    image: new FormControl(''),
    cat_id: new FormControl(1),
    price: new FormControl(1000,Validators.min(2000))
  })
 async ngOnInit(){
    const productid = this.router.snapshot.params['id']
    const product = await this.getProductByID(productid)   
    this.productform.controls.name.setValue(product.name)
    this.productform.controls.image.setValue(product.image)
    this.productform.controls.cat_id.setValue(product.cat_id)
    this.productform.controls.price.setValue(product.price)
 }
 getProductByID=async(id:string)=>{
    const {data} = await axios.get(`http://localhost:3000/products/${id}`)
    return data
 }
 onSubmit = ()=>{
  
 }
}
