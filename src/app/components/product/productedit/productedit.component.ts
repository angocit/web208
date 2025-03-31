import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-productedit',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './productedit.component.html',
  styleUrl: './productedit.component.css'
})
export class ProducteditComponent {
  productform = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(6)]),
      image: new FormControl(""),
      price: new FormControl(0)
    })
   routes = inject(ActivatedRoute)
   id = this.routes.snapshot.params["id"]
   async ngOnInit(){    
    await this.getProductById(this.id)
   }
   getProductById = async (id:number)=>{
      try {
        const {data} = await axios.get(`http://localhost:3000/products/${id}`)
        this.productform.controls.name.setValue(data.name)
        this.productform.controls.image.setValue(data.image)
        this.productform.controls.price.setValue(data.price)
        // console.log(data);
        
      } catch (error) {
        
      }
   }
   async onSubmit(){
      if (this.productform.valid){
          try {
              await axios.put(`http://localhost:3000/products/${this.id}`,this.productform.value)
              alert("cập nhật thành công")
          } catch (error:any) {
            alert(error.response.data)
          }
      }
   }
}
