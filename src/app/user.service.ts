import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUSER } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  RegisterUser = (datauser:IUSER)=>{
    return this.http.post(this.API_URL+'/register', datauser)
  }
}
