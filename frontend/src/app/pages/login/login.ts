import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
userfrm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
    http = inject(HttpClient)
    router = new Router()
    handleSubmit = ()=>{
        if (!this.userfrm.valid) return;
        this.http.post('http://localhost:3000/login',this.userfrm.value).subscribe({
          next:(value:any)=>{
            alert("Đăng nhập thành công")
            sessionStorage.setItem("token",value?.accessToken)            
          },
          error:(err)=>{
            alert("Sai tên đăng nhập hoặc mật khẩu")
          }
        })
    }
}
