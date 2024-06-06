import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private userservice:UserService){}
    registerform = new FormGroup({
      name:new FormControl(),
      email:new FormControl('',Validators.email),
      password:new FormControl(),
      repassword:new FormControl()
    })
    router = new Router();
    onRegister = ()=>{
        this.userservice.Register(this.registerform.value).subscribe(
          data=>{
            alert('Đăng ký thành công')
            this.router.navigate(['signin'])
          },
          err=>{
            alert(err.error)
          }
        )
    }
}
