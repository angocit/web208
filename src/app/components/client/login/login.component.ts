import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userform = new FormGroup({
    email: new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)])
  })
  onSubmit = async()=>{
    if (this.userform.valid){
      try {
        const userdata:any = this.userform.value
        userdata.role = "user"
        const {data} = await axios.post(`http://localhost:3000/login`,userdata)
        // console.log(data);
        localStorage.setItem("user",JSON.stringify(data.user))        
        alert("Đăng nhập thành công")
      } catch (error:any) {
        alert(error.response.data)
      }
    }
  }
}
