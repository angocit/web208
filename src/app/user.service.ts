import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_REGISTER = 'http://localhost:3000/register'; 
  API_LOGIN = 'http://localhost:3000/login';
  constructor(private http:HttpClient) { }
  Register = (data:any):Observable<any>=>{
    return this.http.post(this.API_REGISTER,data)
  }
  Login = (data:any):Observable<any>=>{
    return this.http.post(this.API_LOGIN,data)
  }
}
