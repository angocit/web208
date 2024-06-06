import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  API_URL:string = 'http://localhost:3000/products'
  API_URL_CAT:string = 'http://localhost:3000/categorys'
  GetAllCategory = ():Observable<any>=>{
    return this.http.get(this.API_URL_CAT)
  }
  GetAllProduct = ():Observable<any>=>{
    return this.http.get(this.API_URL)
  }
  GetProductByID = (id:string):Observable<any>=>{
    return this.http.get(this.API_URL+'/'+id)
  }
  AddProduct = (data:IProduct):Observable<any>=>{
    return this.http.post(this.API_URL,data)
  }
  UpdateProduct = (data:IProduct,id:string):Observable<any>=>{
    return this.http.put(this.API_URL+'/'+id,data)
  }
  DeleteProduct = (id:string):Observable<any>=>{
    return this.http.delete(this.API_URL+'/'+id)
  }
}
