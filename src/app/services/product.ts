import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // constructor(private http:HttpClient){

  // }
  API_URL ="http://localhost:3000/products"
  http = inject(HttpClient)
  GetAllProduct = ():Observable<IProduct[]>=>{
     return this.http.get<IProduct[]>(this.API_URL)
  }
  AddProduct = (data:IProduct):Observable<IProduct>=>{
    return this.http.post<IProduct>(this.API_URL,data)
  }
  EditProduct = (data:IProduct,id:number):Observable<IProduct>=>{
    return this.http.put<IProduct>(this.API_URL+'/'+id,data)
  }
  DeleteProduct = (id:number):Observable<IProduct>=>{
    return this.http.delete<IProduct>(this.API_URL+'/'+id)
  }
}
