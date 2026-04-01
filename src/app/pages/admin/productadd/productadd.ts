import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-productadd',
  imports: [ReactiveFormsModule,NzFormModule,NzButtonModule,NzCheckboxModule,NzInputModule],
  templateUrl: './productadd.html',
  styleUrl: './productadd.css',
})
export class Productadd {
  productform = new FormGroup({
    name: new FormControl('',Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl(0,[Validators.required,Validators.min(1000)])
  })
  http = inject(HttpClient)
  message = inject(NzMessageService)
  handleSubmit(){
    const productdata = this.productform.value
     this.http.post(`http://localhost:3000/products`,productdata).subscribe({
        next: (data)=>{
          console.log(data);
          // alert("Thêm mới thành công")
          this.message.success("Thêm mới thành công")
        },
        error:(err)=>{
          console.log(err);          
        }
     })    
  }
}
