import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  productform = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    cat_id: new FormControl(1),
    price: new FormControl(1000)
  })
  onSubmit=() => {
    const data = this.productform.value
    console.log(data);
    
  }
}
