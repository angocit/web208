import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL:string = 'http://localhost:3000/products'
  constructor(private http:HttpClient) { }
  GetAllProduct = ():Observable<any>=>{
    return this.http.get(this.API_URL)
  }
  GetProductById = (id:string):Observable<any>=>{
    return this.http.get(this.API_URL+`/${id}`)
  }
  AddProduct = (data:IProduct):Observable<any>=>{
    return this.http.post(this.API_URL,data)
  }
  EditProduct = (data:IProduct,id:string):Observable<any>=>{
    return this.http.put(this.API_URL+`/${id}`,data)
  }
  DeleteProduct = (id:string):Observable<any>=>{
    return this.http.delete(this.API_URL+`/${id}`)
  }
}
