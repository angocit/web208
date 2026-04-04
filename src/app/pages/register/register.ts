import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-register',
  imports: [NzInputModule,NzFormModule,NzButtonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userform = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  http = inject(HttpClient)
  router = new Router()
  submitForm = ()=>{
      const userdata = this.userform.value
      this.http.post(`http://localhost:3000/register`,userdata).subscribe({
        next: ()=>{
          alert("Đăng ký thành công")
          this.router.navigate(['/login'])
        },
        error: (err)=>{
          console.log(err);          
          alert(err.error)
        }
      })
  }
}
