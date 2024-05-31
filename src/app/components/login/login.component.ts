import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService:UserService){}
  loginform = new FormGroup({
      email: new FormControl('',Validators.email),
      password: new FormControl('',Validators.minLength(8))
  })
  router = new Router();
  onSubmit = ()=>{
    this.userService.UserLogin(this.loginform.value as IUser).subscribe(
      data=>{
          alert('Đăng nhập thành công')
      }
      ,error=>{
          // console.log(error);   
          alert(error.error)       
      }
    )
  }
}
