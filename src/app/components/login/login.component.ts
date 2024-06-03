import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../../interface/user';
import { UserService } from '../../user.service';
import { jwtDecode } from 'jwt-decode';

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
  ngOnInit(){
    if (this.userService.CheckUserValid()){
      this.router.navigate(['dashboard'])
    }
  }
  onSubmit = ()=>{
     this.userService.UserLogin(this.loginform.value as IUser).subscribe(
        data=>{
          console.log(data);
          localStorage.setItem('token',data?.accessToken)
          alert('Đăng nhập thành công')
          this.router.navigate(['dashboard']);
        },
        error=>{
          alert(error.error) 
        }
     ) 
  }
  CheckToken = ()=>{
      console.log(this.userService.CheckUserValid());
            
  }
}
