import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../interface/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
// constructor(private http:HttpClient){}
  productform = new FormGroup({
      name: new FormControl("",[Validators.required]),
      image: new FormControl("",[Validators.required]),
      category: new FormControl(),
      price: new FormControl("",[Validators.required])
  })
  route = inject(ActivatedRoute)
  http = inject(HttpClient)
  id = this.route.snapshot.params["id"] 
  ngOnInit(){   
      // const id = this.route.snapshot.params["id"]      
      this.http.get(`http://localhost:3000/products/${this.id}`).subscribe(
        (data:any)=>{
          this.productform.controls.name.setValue(data.name)
          this.productform.controls.image.setValue(data.image)
          this.productform.controls.price.setValue(data.price)
          this.productform.controls.category.setValue(data.category)
        }
      )
  }
  router = new Router()
  onSubmit = ()=>{
    const id = this.route.snapshot.params["id"] 
      this.http.put(`http://localhost:3000/products/${id}`,this.productform.value).subscribe(
        value=>{
          alert("Cập nhật thành công")
          this.router.navigate(["/admin/product/list"])
        },
        error=>{
          console.log(error);          
        } 
      )
  }
}
