import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-productadd',
  imports: [ReactiveFormsModule,NzFormModule,NzInputModule,NzButtonModule],
  templateUrl: './productadd.html',
  styleUrl: './productadd.css',
})
export class Productadd {
  productform = new FormGroup({
    name: new FormControl('',Validators.required),
    image:new FormControl(''),
    price: new FormControl(0,[Validators.required,Validators.min(1000)])
  })
  onSubmit = ()=>{
      // Lấy data từ form
      const productdata = this.productform.value
      console.log(productdata);
      
  }
}
