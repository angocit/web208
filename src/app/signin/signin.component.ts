import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private userservice:UserService){}
  loginform = new FormGroup({
    email:new FormControl('',Validators.email),
    password:new FormControl(),
    repassword:new FormControl()
  })
  router = new Router();
  onLogin = ()=>{
      this.userservice.Login(this.loginform.value).subscribe(
        data=>{
          alert('Đăng nhập thành công')
          this.router.navigate(['signin'])
        },
        err=>{
          alert(err.error)
        }
      )
  }
}
