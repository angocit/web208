import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userfrm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
    http = inject(HttpClient)
    router = new Router()
    handleSubmit = ()=>{
        if (!this.userfrm.valid) return;
        this.http.post('http://localhost:3000/register',this.userfrm.value).subscribe({
          next:value=>{
            alert("Đăng ký thành công")
            this.router.navigate(['/login'])
          },
          error:(err)=>{
            alert("Đăng ký thất bại")
          }
        })
    }
}
