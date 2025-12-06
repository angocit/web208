import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    userfrm = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl('',Validators.minLength(6))
    })
    http = inject(HttpClient)
    handleSubmit = ()=>{
      if (!this.userfrm.valid) return;
      this.http.post(`http://localhost:3000/login`,this.userfrm.value).subscribe({
        next: (data)=>{
          localStorage.setItem("user",JSON.stringify(data))          
          alert("Đăng nhập thành công")
        },
        error: (err)=>{          
          alert(err?.error)
        }
      })
    }
}
