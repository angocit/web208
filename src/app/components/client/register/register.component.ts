import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    http = inject(HttpClient)
    router = inject(Router)
    onSubmit = async()=>{
      if (this.userform.valid){
        const userdata:any = this.userform.value
        userdata.role = "user"
        this.http.post(`http://localhost:3000/register`,userdata)
        .subscribe(
          data=>{
            alert("Đăng ký thành công")
            this.router.navigate(["login"])
          },
          error=>{
            // console.log(error);  
            alert(error.error)          
          }
        )
        // try {
        //   const userdata:any = this.userform.value
        //   userdata.role = "user"
        //   await axios.post(`http://localhost:3000/register`,userdata)
        //   alert("Thêm mới thành công")
        // } catch (error:any) {
        //   alert(error.response.data)
        // }
      }
    }
}
