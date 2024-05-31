import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUSER } from './interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  RegisterUser = (datauser:IUSER):Observable<any>=>{
    return this.http.post(this.API_URL+'/register', datauser)
  }
}
