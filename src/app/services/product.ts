import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
API_URL = 'http://localhost:3000/products'
http = inject(HttpClient)
getAll = ()=>{
    return this.http.get<IProduct[]>(this.API_URL)
}  
getById = (id:number|string)=>{
  return this.http.get<IProduct>(`${this.API_URL}/${id}`)
}
Add = (productdata:any)=>{
  return this.http.post<IProduct>(this.API_URL,productdata)
}
Delete = (id:number|string)=>{
  return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
}
Edit = (id:number|string,productdata:any)=>{
  return this.http.put<IProduct>(`${this.API_URL}/${id}`,productdata)
}
}
