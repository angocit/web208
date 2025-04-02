import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(private http:HttpClient){}
  productform = new FormGroup({
      name: new FormControl("",[Validators.required]),
      image: new FormControl("",[Validators.required]),
      category: new FormControl(),
      price: new FormControl("",[Validators.required])
  })
  // http = Inject(HttpClient)
  onSubmit = ()=>{
      this.http.post(`http://localhost:3000/products`,this.productform.value).subscribe(
        value=>{
          alert("Thêm mới thành công")
        },
        error=>{
          console.log(error);          
        } 
      )
  }
}
