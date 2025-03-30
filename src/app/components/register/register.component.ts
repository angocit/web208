import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    userform = new FormGroup({
      email: new FormControl("",[Validators.email,Validators.required]),
      password:new FormControl("",[Validators.required,Validators.minLength(6)])
    })
    onSubmit = async()=>{
      if (this.userform.valid){
        try {
          const userdata:any = this.userform.value
          userdata.role = "user"
          await axios.post(`http://localhost:3000/register`,userdata)
          alert("Thêm mới thành công")
        } catch (error:any) {
          alert(error.response.data)
        }
      }
    }
}
