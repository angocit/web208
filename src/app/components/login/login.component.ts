import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../../interface/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService:UserService){}
  loginform =  new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  router = new Router()
  onSubmit = ()=>{
     this.userService.UserLogin(this.loginform.value as IUser).subscribe(
        data=>{
            alert('Đăng nhập thành công')
        },
        error=>{
          alert(error.error) 
        }
     ) 
  }
}
