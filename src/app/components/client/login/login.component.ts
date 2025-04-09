import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  http = inject(HttpClient)
  router = inject(Router)
  onSubmit = async()=>{
    if (this.userform.valid){
      const userdata:any = this.userform.value
      this.http.post(`http://localhost:3000/login`,userdata).subscribe(
        (data:any)=>{
          console.log(data);
          localStorage.setItem("user",JSON.stringify(data.user))
          alert("Đăng nhập thành công")
        },
        error=>{
          alert(error.error)
        }
      )
      // try {
      //   const userdata:any = this.userform.value
      //   userdata.role = "user"
      //   const {data} = await axios.post(`http://localhost:3000/login`,userdata)
      //   // console.log(data);
      //   localStorage.setItem("user",JSON.stringify(data.user))        
      //   alert("Đăng nhập thành công")
      // } catch (error:any) {
      //   alert(error.response.data)
      // }
    }
  }
}
