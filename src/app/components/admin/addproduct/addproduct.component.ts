import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  productform = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('0+[0-9]{9}$')]),
    image: new FormControl(''),
    cat_id: new FormControl(1),
    price: new FormControl(1000,Validators.min(2000))
  })
   onSubmit=async () => {
    const productdata = this.productform.value
    // console.log(data);
    const {data} =await axios.post('http://localhost:3000/products',productdata);
    console.log(data); 
  }
}
