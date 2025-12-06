import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
    userfrm = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl('',Validators.minLength(6))
    })
    http = inject(HttpClient)
    handleSubmit = ()=>{
      if (!this.userfrm.valid) return;
      this.http.post(`http://localhost:3000/register`,{...this.userfrm.value,role:'user'}).subscribe({
        next: ()=>{
          alert("Đăng ký thành công")
        },
        error: (err)=>{          
          alert(err?.error)
        }
      })
    }
}
